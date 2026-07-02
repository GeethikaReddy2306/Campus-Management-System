const User=require('../models/User');
const bcrypt=require('bcryptjs');
async function userSignup(req,res){
        try{
        const{name,email,password,role,profilePicture,phoneNumber,rollNumber}=req.body;
        if(!name||!email||!password||!role||!profilePicture||!phoneNumber||!rollNumber){
                return res.status(400).json({
                        success:false,
                        message:"Missing required fields"
                })

        }
        const existingEmailUser=await User.findOne({email:email});
        const existingPhoneNumber=await User.findOne({phoneNumber:phoneNumber});
        const existingRollNumber=await User.findOne({rollNumber:rollNumber});
        if(existingEmailUser||existingPhoneNumber||existingRollNumber){
                return res.status(409).json({
                        success:false,
                        message:"User already exists"
                })
        }
       
        const hashedPassword=await bcrypt.hash(password,10);
      
      const data=await  User.create({name,email,role,profilePicture,phoneNumber,rollNumber,password:hashedPassword});
        return res.status(201).json({
                success:true,
                message:'Registered Successfully, Waiting for the Admin Approval',
                data:data
        })
       
        }catch(err){
                console.log(err);
               return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
        }

}
module.exports={userSignup};