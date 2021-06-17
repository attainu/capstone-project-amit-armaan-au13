import Product from "../models/productModel.js";

//@description: Fetch all products
//@route: get/api/products
//@access: public

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(`message:${error.message}`);
  }
}

//@description: Fetch all products
  //@route: get/api/products/:id
  //@access: public

const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      }
    } catch (error) {
      res.status(404).send(`message:${error.message}`);
    }
  }
  

 

export { getProductById, getProducts };
