const User=require('./../models/user');

exports.userSignup=async(req,res)=>{
    console.log(req);
    try{

          const user=await User.findOne({username:req.body.username});
            if(user){
                return res.status(400).json({message:"Username already exists"});
            }
            await User.create(req.body)
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

}

exports.userSignin=async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        console.log("Enter both");
        return res.status(400).json({message:"Enter both"});
    }
    const user=await User.findOne({username});

    if(!user){
        console.log("User not exists");
        return res.status(400).json({message:"User not exists"});
    }
    const isMatch=await user.matchPassword(password);  
       
    if(!isMatch){
        console.log("Invalid credentials");
        return res.status(400).json({message:"Invalid credentials"});
    }
    else{
        return res.status(200).json({message:"Login successfull"});
    }
}

