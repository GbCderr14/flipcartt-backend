const express=require('express');
const {userSignup,userSignin} =require('./../controller/user')
const router=express.Router();
const {product}=require('./../controller/prodduct');
const {productdetail}=require('./../controller/prodduct');
router.post('/signup',userSignup);
router.post('/login',userSignin);
router.get('/products',product);
router.get('/product/:id',productdetail);

module.exports=router;

