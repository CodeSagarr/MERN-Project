const express = require('express');
const app = express()
const mongoose = require('mongoose');
const userModel = require('./model/user')




mongoose.connect('mongodb://127.0.0.1:27017/newUserData')
.then(()=>console.log('mongoDB connect'))
.catch((err)=>console.log(err))

//validater 

const {validater} = require('./middleware/validmiddleware');
const {newSchema,signSchema} = require('./validator/validSchema')


app.use(express.json())


app.get('/user',(req,res)=>{
    res.json({
        message:"welcome to user route"
    })
})


app.post('/user/register', validater(newSchema) ,async(req,res)=>{
    const{username,email,password} = req.body;
    console.log(username,email,password)
    const user = new userModel({
        username,
        email,
        password
    })
    await user.save();
    res.json({msg:'user successfully registered'})
})

app.post('/user/login',validater(signSchema), async(req,res)=>{
    const{email,password} = req.body;
    console.log(email,password);
    const user = await userModel.findOne({email,password});
    if(!user) return res.json({msg:'user are not sign up'});
    res.json({msg:'user successfully sign up'});
    
})









const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server started on port ${port}`))