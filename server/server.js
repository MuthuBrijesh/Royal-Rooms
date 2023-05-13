const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);
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
require("./src/AddHotel");
require("./src/AddRoom");
const User = mongoose.model("UserInfo");
const Hotel = mongoose.model("HotelInfo");
const Room = mongoose.model("RoomInfo");


//login
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

//forget password
app.post("/forget",async (req,res) => {
    const {email,x}= req.body;
    const user = await User.findOne({email});
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{ "email": email }];
    sendSmtpEmail.templateId =2 ;
    sendSmtpEmail.params = {
        "Name": email,
        "Otp": x
    };
    apiInstance.sendTransacEmail(sendSmtpEmail).then(() => {
        console.log("Password reset email sent");
    }).catch((err) => {
    console.log(err);
    });
    return res.json({status: "ok"});
})

app.post("/change",async (req,res) => {
    const {email,password,cpassword}= req.body;
    var myquery = { email: email };
    var newvalues = { $set: {pass: password, cpass: cpassword } };
    const user = await User.updateOne({myquery},{newvalues});
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    return res.json({status: "ok"});
})

//HotelDetails
app.post("/hoteldetails",async (req,res) => {
    try{
        const data=await Hotel.find();
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

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

//AddHotel
app.post("/addhotel",async (req,res) => {
    const {name,addr,phone,city,image} = req.body;
    try{
        const check = await Hotel.findOne({name});
        if(check===null){
            await Hotel.create( { name,addr,phone,city,image } );
            res.send({ status: "ok"});
        }
    }catch(error){
        res.send({send: "error"});
    }
});

//Home
/*app.post("/details",async (req,res) => {
    try{
        var room = await Room.find();
        var cuser = await CUser.find();
        var hotel = await Hotel.find();
        room = room.length;
        cuser = cuser.length;
        hotel = hotel.length;
        res.send({ status: "ok",room:room,cuser:cuser,hotel:hotel});
    }catch(error){
        res.send({send: "error"});
    }
});*/

//AddRoom
app.post("/addroom",async (req,res) => {
    const {hotel,maxc,roomt,desc,cusine,cost,image1,image2,image3,image4} = req.body;
    try{
        await Room.create( {hotel,maxc,roomt,desc,cusine,cost,image1,image2,image3,image4} );
        res.send({ status: "ok"});
    }catch(error){
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

//Forget Password
app.post("/forget-password",async(req, res)=>{
    const {email,x} = req.body;
    console.log(email,x);
    try{
        const oldUser = await User.findOne({email});
        if(!oldUser){
            return res.json({status:"User Not Exists!!"});
        };
        console.log(email,x);
    }
    catch(error){
        co
        return error;
    }
})

//--------------------------------------------------------------------------------------------------------------------------------------
//Customer Details 

//Login
app.post("/clogin",async (req,res) => {
    const {email,password}= req.body;
    const check = await CUser.findOne({email});
    if(!check) {
        return res.json({ error: "User Not Found"});
    }
    if(password===check.pass){
        return res.json({ status: "ok",data :email});
    }
    res.json({status: "error",error: "Invalid Password"})
})

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

//Reterive Customer Details
app.post("/custt",async (req,res) => {
    const {email}= req.body;
    const user1 = await CUser.findOne({email});
    if(!user1) {
        return res.json({ error: "User Not Found"});
    }
    return res.send({ status: "OK",data :user1});
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
})*/

//HotelDetails
app.post("/roomdetails",async (req,res) => {
    try{
        const data=await Room.find();
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});
