const mongoose = require("mongoose");

const BookDetailsScehma = new mongoose.Schema({
        name: String,
        hname:String,
        phone: String,
        rdate:String,
        nfdate:String,
        image: String,
        amount: String,
        bookid: String,
        payment: String},
    { collection: "BookInfo", } );
mongoose.model("BookInfo", BookDetailsScehma);