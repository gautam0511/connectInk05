const User = require('../models/user');
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const twilio = require('twilio');
let acountSid = `${process.env.ACCOUNT_SID}`;
let authToken = `${process.env.AUTH_TOKEN}`;
exports.getUser = async(req,res,next)=>{
    try{
        const user  = await User.find()
        res.status(200).json({message:'Welcome to connectInk',user:user})
    }
    catch(err){
        throw err;
    }
  
}

exports.postsignup = async(req,res,next)=>{
    const name = req.body.name;
    const phone = req.body.phone;
  
    try{
        const users = await User.findOne({phone:phone})
        if(!users){
            const user = new User({
                name,
                phone
            })
            
            const result = await user.save();
           res.status(201).json({message:'Welcome to connectInk',users:result})
            // let otp =  otpGenerator.generate(6, { upperCase: false, specialChars: false });
            //      let client = new twilio(acountSid,authToken)
            //      console.log('hello-')
            //      client.messages.create({
            //          to:`${user.phone}`,
            //          from:'+14707983817',
            //          body:`Your otp is ${otp}`
            //      }).then(msg=>console.log(msg.sid)).catch(err=>console.log(err))
            //     res.status(200).json({message:"otp sent !!!"})
          
        }
        else{
            res.status(200).json({message:`Welcome again ${users.name}`,users:users})
        }
        
   
    }
    catch(err){
        throw err;
    }
}

exports.postUser = async(req,res,next)=>{
    const userId = req.params.userId;
    const file = req.files.file;
    try{
        console.log('file',file)
        if (!file) {
            console.log('No file');
            res.json({ message: 'No Image' })
        }
        const ext = file.mimetype.split('/')[1]
        console.log(file)
        const fileName = "ConnectInk"+ Math.random() + '.'+ `${ext}`
        file.mv("public/" + fileName, (err, result) => {
            if (err) {
                throw err;
            }

            
        })
        const profilePic = `http://localhost:3007/${fileName}`
        console.log(profilePic)
    
            const user = await User.findByIdAndUpdate(userId,{profilePic:`${profilePic}`},{new:true}) 
            console.log(user)
            res.status(200).json({
                success: 'Success',
                data:user
                
            })

        
       }
    catch(err){
        throw err;
    }
}
