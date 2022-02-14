const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken');
const bcrypt = require("bcryptjs");

require('../db/conn');
const User=require("../model/userSchema");


// router.get('/', (req, res) => {
//     res.send(`Hello world from the server rotuer js`);
// });
    

router.post('/register', async (req, res) => {

    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error:"Please fill all details"});
    }

    try{
        const userExist=await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:"Email Already Exist"})
        }

        const user=new User({name,email,phone,work,password,cpassword});
            //yaha pr 
        await user.save();

            res.status(201).json({message:"user registered sucessfully"});
    }
    catch(err){
        console.log(err);
    }

    // console.log(req.body);
    // res.json({ message: req.body });
    // res.send("mera register page");

});



//login route
router.post('/signin',async(req,res)=>{
// console.log(req.body);
// const userLogin=await User.findOne({email:email});
try{
    const{email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({error:"Please fill data"})
    }

    const userLogin=await User.findOne({email:email});
    //  console.log(userLogin);

    if(userLogin){
        const isMatch=await bcrypt.compare(password,userLogin.password);
        const token=await userLogin.generateAuthToken();
        console.log(token);


        //store jwt token in cookie
        res.cookie("jwttoken",token,{
            expires:new Date(Date.now()+ 25892000000),
            httpOnly:true
        });

        
    if(!isMatch){
        res.status(400).json({error:"user error"});
    }else{
        res.json({message: "User Sign In Successfully" });
    }
}else{
    res.status(400).json({error:"Invalid Credientials"});
}
}catch(e){
    console.log(e);
}
});

module.exports = router;