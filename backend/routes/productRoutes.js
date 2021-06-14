import express from 'express'

import Product from '../models/productModel.js'
 const router = express.Router()

//@description: Fetch all products
//@route: get/api/products
//@access: public



 router.get("/", async (req, res) => {
     try {
          const products = await Product.find({});
          res.json(products);
     } catch (error) {
         console.log(`message:${error.message}`)
     }
    
 });

 //@description: Fetch all products
//@route: get/api/products/:id
//@access: public

 router.get("/:id", async (req, res) => {

    try {
         const product =  await Product.findById(req.params.id)
         if (product){
            res.json(product);
         }
    } catch (error) {
        res.status(404).send( `message:${error.message}`);
    }
  
 });
 export default router