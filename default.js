
const products=require('./constants/data.js');
const Product=require('./models/product-schema.js');
const DefaultData=async ()=>{
    try{
        await Product.insertMany(products);
        }
    catch(err){
        console.log("Error in inserting data");
    }
}

module.exports=DefaultData;