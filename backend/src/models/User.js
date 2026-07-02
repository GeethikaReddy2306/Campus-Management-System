const mongoose=require('mongoose');
const userSchema=new  mongoose.Schema({
      name:{
        type:String,
        required:true
      }  ,email:{
        type:String,
        required:true,
        unique:true
      },password:{
        type:String,
        required:true
      },role:{
        type:String,
        enum:['Teacher','Student','Admin'],
        default:'Student',
        required:true
         },status:{
                type:String,
                enum:['pending','Accepted','Rejected']
         },profilePicture:{
                type:String,
                required:true
 },phoneNumber:{
        type:Number,
        required:true
 },rollNumber:{
        type:String,
        required:function(){
                return this.role==='Teacher'||this.role==='Student';
        }
 }
})
module.exports=mongoose.model('User',userSchema);