const mongoose = require("mongoose");

const BookDetailsScehma = new mongoose.Schema({
        name: String,
        hotel:String,
        phone: String,
        date:String,
        night:String,
        image: String, },
    { collection: "BookInfo", } );
mongoose.model("BookInfo", BookDetailsScehma);