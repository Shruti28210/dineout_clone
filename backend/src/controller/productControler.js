const express=require("express");

const Product=require("../modules/productModule");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const product=await Product.find().lean().exec();
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})


module.exports=router