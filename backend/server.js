const express = require('express');
const app = express()
const mongoose = require('mongoose');
const userModel = require('./model/user')
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const s_key = 'Sagar$12@'



mongoose.connect('mongodb://127.0.0.1:27017/newUserData')
    .then(() => console.log('mongoDB connect'))
    .catch((err) => console.log(err))

//validater 

const { validater } = require('./middleware/validmiddleware');
const { newSchema, signSchema } = require('./validator/validSchema')
// const { setUserToken} = require('./service/jwt');


app.use(express.json())


app.get('/user', (req, res) => {
    res.json({
        message: "welcome to user route"
    })
})


app.post('/user/register', validater(newSchema), async (req, res) => {
    const { username, email, password } = req.body;
    const hashSalt = 8;
    const hashedPassword = await bycrypt.hash(password, hashSalt);
    console.log(username, email, password)
    const user = new userModel({
        username,
        email,
        password: hashedPassword
    })
    await user.save();
    res.json({ msg: 'user successfully registered' })
})


//  login user

app.post('/user/login', validater(signSchema), async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const comparePsw = await bycrypt.compare(password,user.password)

      const token = jwt.sign({email,password }, s_key)
      res.cookie("token", token)

    if (!comparePsw === true) return res.json({ msg: 'user not found' }); 
  
    res.json({msg:'user successfully login'})

})








const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server started on port ${port}`))