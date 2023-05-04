const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema({
        fname: String,
        lname: String,
        email: String,
        phone: String,
        address: String,
        age: String,
        gender: String,
        nation: String,
        pass: String,
        cpass: String, },
    { collection: "UserInfo", } );
mongoose.model("UserInfo", UserDetailsScehma);