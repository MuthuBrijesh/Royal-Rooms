const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
//  const ImageModel = require('./image.model');
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);
//const nodemailer = require('nodemailer');
const mongourl="mongodb+srv://rmuthubrijesh:RoyalRooms@roomslog.ccobpsk.mongodb.net/?retryWrites=true&w=majority";
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = "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";
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();


//Database Connection 
mongoose.connect(mongourl,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connected to database");
}).catch((e)=>console.log(e));

app.listen(5000, () => console.log('Server Started'));


//--------------------------------------------------------------------------------------------------------------------------------------
//Admin Details
//Login
require("./src/UserDetails");
const User = mongoose.model("UserInfo");

app.post("/login",async (req,res) => {
    const {email,password}= req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    if(password===user.pass){
        return res.json({ status: "ok",data :email});
    }
    res.json({status: "error",error: "Invalid Password"})
})



//Register
app.post("/register",async (req,res) => {
    const {fname,lname,email,phone,address,age,gender,nation,pass,cpass} = req.body;
    try{
        const check = await User.findOne({email});
        console.log(check);
        if(check===null){
            await User.create({
                fname,
                lname,
                email,
                phone,
                address,
                age,
                gender,
                nation,
                pass,
                cpass
            });
            res.send({ status: "ok"});
        }
    } catch(error){
        res.send({send: "error"});
    }
});
//Admin Profile
app.post("/retadmin",async (req,res) => {
    try{
        const {email}= req.body;
        const data=await User.find({email});
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

async function main(){
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
          const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
          sendSmtpEmail.to = [{ "email": "953620104030@ritrjpm.ac.in" }];
          sendSmtpEmail.templateId =1 ;
          apiInstance.sendTransacEmail(sendSmtpEmail).then(() => {
            console.log("Password reset email sent");
          }).catch((err) => {
            console.log(err);
          });
}
//main()

//--------------------------------------------------------------------------------------------------------------------------------------
//Customer Details 
//Register
require("./src/CustDetails");
const CUser = mongoose.model("CustInfo");

app.post("/cregister",async (req,res) => {
    const {fname,lname,email,phone,address,age,gender,nation,pass} = req.body;
    try{
        const check = await CUser.findOne({email});
        if(check===null){
            await CUser.create({
                fname,
                lname,
                email,
                phone,
                address,
                age,
                gender,
                nation,
                pass
            });
            res.send({ status: "ok"});
        }
    } catch(error){
        res.send({send: "error"});
    }
});
//Reterive All Emails 
app.post("/custret",async (req,res) => {
    const user = await CUser.find({},{email:1,_id:0});
    if(!user) {
        return res.send({ error: "No User Found"});
    }
    return res.send({ status: "OK",data:user})
})

app.post("/custt",async (req,res) => {
    const {email}= req.body;
    const user = await CUser.findOne({email});
    if(user===null) {
        return res.send({ error: "User Not Found"});
    }
    return res.send({ status: "OK",data :user});
})

//Reterive User
/*app.post("/custr",async (req,res) => {
    const {email}= req.body;
    const user = await CUser.findOne({email});
    if(user===null) {
        return res.send({ error: "User Not Found"});
    }
    return res.send({ status: "OK",data :email});
})*/

//
/*

//Forget Password
/*app.post("/forget-password",async(req, res)=>{
    const {email} = req.body;
    try{
        const oldUser = await User.findOne({email});
        if(!oldUser){
            return res.json({status:"User Not Exists!!"});
        }
        const link = `http://localhost:5000/reset-password/${oldUser.email}/${oldUser._id}/${oldUser.pass}`;
        console.log(link);
    }
    catch(error){
        return error;
    }
})

app.get("/reset-password/:email/:id/:pass",async(req, res)=>{
    const {email, id, pass } = req.params;
    res.render("index", { email: email, status: "Not Verified" });
})

app.post("/reset-password/:email/:id/:pass",async(req, res)=>{
    const {email, id, pass } = req.params;
    const { password } = req.body;
    console.log(password)
    try {
        await User.updateOne( { _id: id,},
          { $set: { pass: password, },$set: { cpass: password, }, }
        );
        res.render("index", { email: email, status: "Verified" });
      } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
      }
})

// storage
/*const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) =>{
        cb(null,file.originalname);
    },
});

const upload = multer({
    storage:Storage
}).single('testImage')

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            const newImage = new ImageModel({
                name: req.body.name,
                image:{
                    data:req.file.filename,
                    contentType: "image/png",
                },
            });
            newImage.save().then(()=>res.send("Successfully Upload"))
            .catch(err=>console.log(err))
        }
    })
})*/