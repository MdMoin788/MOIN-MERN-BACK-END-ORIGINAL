
const mongoose = require("mongoose");

const TshirtSchema = new mongoose.Schema({

    imgUrl : {type : String , required : true },
    price : {type : Number , required : true },
    size : {type : String , required : true },
    colour : {type : String , required : true },
    qty: {type:Number , required: false, default:1}
    
})

module.exports = mongoose.model("tshirt", TshirtSchema)