const express=require('express');
const app=express();
require('dotenv').config()
const dns=require('dns');
dns.setServers(['8.8.8.8','1.1.1.1']);
const MongoDBConnect=require('../src/config/db');
MongoDBConnect();
const userRoutes=require('../src/routes/user.routes');
app.use(express.json());
app.get('/',(req,res)=>{
        res.send("server is running successfully");
})

app.use('/api',userRoutes);
app.listen(process.env.PORT,()=>{
        console.log("Server is running successfully");
})