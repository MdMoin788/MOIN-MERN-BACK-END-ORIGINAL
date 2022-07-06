
const express = require("express");
const router = express.Router();

const Mens = require("../../models/ProductsModel/mensModel");

router.post("",async(req,res)=>{

    try {
        let mens = await Mens.create(req.body);
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("",async(req,res)=>{

  
    try {
        let mens = await Mens.find().lean().exec();
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/:id",async(req,res)=>{

  
    try {
        let mens = await Mens.findById({_id:req.params.id}).lean().exec();
        console.log(mens)
        return res.status(200).send(mens)
  
    } catch (e) {
        return res.status(500).send(e.message)

    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let mens = await Mens.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let mens = await Mens.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(mens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})




router.get("/sortasc",async(req,res)=>{
    try {
        const mens= await Mens.find().sort({price:1}).lean().exec();
      return  res.status(201).send(mens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })
 
   

  router.get("/sortdesc",async(req,res)=>{
    try {
        const mens= await Mens.find().sort({price:-1}).lean().exec();
      return  res.status(201).send(mens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 });



module.exports = router;