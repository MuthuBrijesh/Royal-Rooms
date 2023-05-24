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

require("./src/UserDetails");
require("./src/AddHotel");
require("./src/AddRoom");
require("./src/CustDetails");
require("./src/BookDetails");
const User = mongoose.model("UserInfo");
const Hotel = mongoose.model("HotelInfo");
const Room = mongoose.model("RoomInfo");
const CUser = mongoose.model("CustInfo");
const Book = mongoose.model("BookInfo");


//Login
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

//Forget Password
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
    var newvalues = {pass: password, cpass: cpassword };
    const user = await User.updateOne(myquery,newvalues);
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    return res.json({status: "ok"});
})

//Hotel Details
app.post("/hoteldetails",async (req,res) => {
    try{
        const data=await Hotel.find();
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

//HotelD
app.post("/hoteldet",async (req,res) => {
    const {name} = req.body;
    //console.log(name);
    try{
        const check = await Hotel.findOne({name});
        if(check===null){
            res.send({ status: "Hotel Does not Exist"});
        }
        else{
            res.send({ status: "OK", data:check});
        }
    }catch(error){
        res.send({status: "error"});
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
        }else{
            res.send({status: "error"});
        }
    } catch(error){
        res.send({send: "error"});
    }
});

//Add Hotel
app.post("/addhotel",async (req,res) => {
    const {name,addr,phone,city,image} = req.body;
    try{
        const check = await Hotel.findOne({name});
        if(check===null){
            await Hotel.create( { name,addr,phone,city,image } );
            res.send({ status: "ok"});
        }
        else{
            res.send({status: "error"});
        }
    }catch(error){
        res.send({status: "error"});
    }
});

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

/*//Forget Password
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
})*/

//--------------------------------------------------------------------------------------------------------------------------------------
//Customer Details 

//Customer Login
app.post("/clogin",async (req,res) => {
    const {email,password}= req.body;
    const check = await CUser.findOne({email});
    if(!check) {
        return res.json({ error: "User Not Found"});
    }
    if(password===check.pass){
        return res.json({ status: "ok",data :check});
    }
    res.json({status: "error",error: "Invalid Password"})
})

//Customer Register
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

//Reterive All Customer Emails 
app.post("/custret",async (req,res) => {
    const user = await CUser.find({},{email:1,_id:0});
    if(!user) {
        return res.send({ error: "No User Found"});
    }
    return res.send({ status: "OK",data:user})
})

//Reterive Customer Details for an email
app.post("/custt",async (req,res) => {
    const {email}= req.body;
    const user1 = await CUser.findOne({email});
    if(!user1) {
        return res.json({ error: "User Not Found"});
    }
    return res.send({ status: "OK",data :user1});
})

//RoomDetails(List of Rooms) Find all Room in DB
app.post("/roomdetails",async (req,res) => {
    try{
        const data=await Room.find();
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

//RoomDetailsPage Details of one Page using _id
app.post("/roomsd",async (req,res) => {
    const {_id}= req.body;
    try{
        const data=await Room.findOne({_id});
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

//Add Booking 
app.post("/addbooking",async (req,res) => {
    const {name,hname,phone,rdate,nfdate,image,amount,bookid,payment} = req.body;
    console.log(bookid);
    try{
        await Book.create( {name,hname,phone,rdate,nfdate,image,amount,bookid,payment} );
        console.log("Ok");
        res.send({ status: "OK"});
    }catch(error){
        res.send({status: "error"});
    }
});

//Reterive all Booking Count
app.post("/countbooking",async (req,res) => {
    try{
        var data=await Book.find().count();
        //console.log(data);
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

//Payment
app.post("/pay",async (req,res) => {
    var {bookid}= req.body;
    bookid = bookid-1;
    console.log(bookid);
    var myquery = { bookid: bookid};
    var newvalues = { payment:"true"};
    const user = await Book.updateOne(myquery,newvalues);
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    return res.json({status: "OK"});
})

//Reterive all Booking
app.post("/booking",async (req,res) => {
    var {name}= req.body;
    try{
        var data=await Book.find({name});
        if(data===null){
            res.send({status: "error"});
        }
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

//Reterive all Booking
app.post("/allbooking",async (req,res) => {
    try{
        var data=await Book.find();
        if(data===null){
            res.send({status: "error"});
        }
        res.send({ status: "OK",data:data});
    } catch(error){
        console.log(error);
    }
});

//Forget Password
app.post("/cforget",async (req,res) => {
    const {email,x}= req.body;
    const user = await CUser.findOne({email});
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{ "email": email }];
    sendSmtpEmail.templateId =2 ;
    sendSmtpEmail.params = {
        "Otp": x
    };
    apiInstance.sendTransacEmail(sendSmtpEmail).then(() => {
        console.log("Password reset email sent");
    }).catch((err) => {
    console.log(err);
    });
    return res.json({status: "ok"});
})

app.post("/cchange",async (req,res) => {
    const {email,password,cpassword}= req.body;
    var myquery = { email: email };
    var newvalues = {pass: password, cpass: cpassword };
    const user = await CUser.updateOne(myquery,newvalues);
    if(!user) {
        return res.json({ error: "User Not Found"});
    }
    return res.json({status: "ok"});
})