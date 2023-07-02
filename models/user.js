const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true,
    trim:true
  },
  username: {
    type: String,
    required: true,
    unique:true,
    index:true,
    lowercase:true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true ,
    trim:true,
    lowercase:true 
  }
});

userSchema.methods.matchPassword=async function(enteredPassword){
    if(this.password===enteredPassword)
    return 1;
    
}

const User = mongoose.model('User', userSchema);

module.exports = User;
