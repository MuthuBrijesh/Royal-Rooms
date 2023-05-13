const mongoose = require("mongoose");

const HotelDetailsScehma = new mongoose.Schema({
        name: String,
        addr: String,
        phone: String,
        city: String,
        image: String, },
    { collection: "HotelInfo", } );
mongoose.model("HotelInfo", HotelDetailsScehma);