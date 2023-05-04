const mongoose = require("mongoose");

const HotelDetails = new mongoose.Schema({
        hoteln: {
            type:String,
            require:true 
         },
        addr: {
            type:String,
            require:true 
         },
        city: {
            type:String,
            require:true 
         },
        phone: {
            type:String,
            require:true 
         },
        nation:{
            type:String,
            require:true 
         } ,
        image:{
           data:Buffer,
           contentType: String 
        } 
    },{ collection: "HotelInfo", } );
mongoose.model("HotelInfo", HotelDetails);