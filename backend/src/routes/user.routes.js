const express=require('express');
const router=express.Router();
const {userSignup}=require('../controllers/user.controller');
router.post('/signup',userSignup);
module.exports=router;
