const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    shortID : {
        type : String,
        required : true,
        unique : true,
    },
    reDirectURL:{
        type : String,
        required : true,
    },
    visitHistory:[{timestamp : {
        type : Number
    }}],
},{timestamps : true}); 

const URL = mongoose.model("url",urlSchema);

module.exports = URL;