
const express = require("express");
const router = express.Router();

const Womens = require("../../models/ProductsModel/Women-Model");

router.post("",async(req,res)=>{

    try {
        let womens = await Womens.create(req.body);
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("",async(req,res)=>{

  
    try {
        let womens = await Womens.find().lean().exec();
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("/:id",async(req,res)=>{

  
    try {
        let womens = await Womens.findById({_id:req.params.id}).lean().exec();
        console.log(womens)
        return res.status(200).send(womens)
  
    } catch (e) {
        return res.status(500).send(e.message)

    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let womens = await Womens.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let womens = await Womens.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(womens)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})




router.get("/sortasc",async(req,res)=>{
    try {
        const womens= await Womens.find().sort({price:1}).lean().exec();
      return  res.status(201).send(womens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 })
 
   

  router.get("/sortdesc",async(req,res)=>{
    try {
        const womens= await Womens.find().sort({price:-1}).lean().exec();
      return  res.status(201).send(womens)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
 });



module.exports = router;