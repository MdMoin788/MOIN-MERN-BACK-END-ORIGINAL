
const express = require("express");
const router = express.Router();

const Tshirt = require("../models/tshirtModel");

router.post("",async(req,res)=>{

    try {
        let tshirt = await Tshirt.create(req.body);
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("",async(req,res)=>{

  
    try {
        let tshirt = await Tshirt.find().lean().exec();
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/:id",async(req,res)=>{

  
    try {
        let tshirt = await Tshirt.findById({_id:req.params.id}).lean().exec();
        console.log(tshirt)
        return res.status(200).send(tshirt)
  
    } catch (e) {
        return res.status(500).send(e.message)

    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let tshirt = await tshirt.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let tshirt = await Tshirt.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(tshirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;