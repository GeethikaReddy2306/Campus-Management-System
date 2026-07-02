const mongoose=require('mongoose');
require('dotenv').config();
async function MongoDBConnect(){
      await mongoose.connect(process.env.MONGO_URI);
}
MongoDBConnect().then((res)=>{console.log("DB Connected")})
.catch((err)=>{
        console.log(err);
})
module.exports=MongoDBConnect;