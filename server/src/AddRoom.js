const mongoose = require("mongoose");

const RoomDetailsScehma = new mongoose.Schema({
        hotel: String,
        maxc: String,
        roomt: String,
        desc: String,
        cusine: String,
        cost:String,
        image1:String,
        image2:String,
        image3:String,
        image4:String, 
        count:String},
    { collection: "RoomInfo", } );

mongoose.model("RoomInfo", RoomDetailsScehma);