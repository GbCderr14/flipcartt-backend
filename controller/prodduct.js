
const Product=require('../models/product-schema');
exports.product=async (req,res)=>{
    try{
        const products=await Product.find();
        // console.log(products);
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json("Error in fetching products");
        console.log('error');
    }
}

exports.productdetail=async (req,res)=>{
    try{
        const product=await Product.find({'id':req.params.id});
        console.log(product);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json("Error in fetching products");
        console.log(err);
    }
}

