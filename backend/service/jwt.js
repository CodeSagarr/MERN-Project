// const jwt = require('jsonwebtoken');
// const secretKey = '@1234Sagar'

// function setUserToken(user) {
//     return jwt.sign({
//         _id:user._id,
//         username:user.username
//     },secretKey)
// }

// function getUserToken(token){
//     if(!token) return null;

//     return jwt.verify(token,secretKey)

  
// }

module.exports = {
    setUserToken,
   
}