const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const Username=process.env.DB_USERNAME;
const Password=process.env.DB_PASSWORD;
const DefaultData=require('./../default');
const  Connection=async (username,password)=>{
    try{
        console.log(username)
          const conn=await mongoose.connect(`mongodb+srv://${username}:${password}@cluster--infinity.xyoz1o8.mongodb.net/`);
            console.log("Database connected successfully");
            // DefaultData();
    } 
    catch(err){
        console.log("Error in connecting with database"+err.message);
    }
}
module.exports=Connection;