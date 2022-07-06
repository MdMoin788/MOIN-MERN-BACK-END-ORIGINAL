
const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema({
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: Number, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: false },
    colour: { type: String, required: true },
    Item: { type: Number, required: false, default: 1 }
    
})

module.exports = mongoose.model("men", mensSchema)