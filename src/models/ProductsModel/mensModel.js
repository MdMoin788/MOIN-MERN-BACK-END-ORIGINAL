
const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    Item: { type: Number, required: false, default: 1 }
    
})

module.exports = mongoose.model("men", mensSchema)