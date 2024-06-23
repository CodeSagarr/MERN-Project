import { useState } from 'react';
import './App.css'
import axios from 'axios';


const Login = () => {
const [userSign , setUserSign] = useState({email:'',password:'',});
 
const changeHandle = (e) =>{
  setUserSign({...userSign,[e.target.name]:e.target.value})
}

const submitSign = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/login',userSign)
      alert(response.data.msg);
      setUserSign({email:'',password:'',})
    } catch (error) {
      console.log(error)
    }
}



  return (
   <>
  <div className='container'>
        <h1>Login</h1>

        <div className='userForm'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter email"   onChange={changeHandle}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter password" onChange={changeHandle} />

            <button type="submit" onClick={submitSign} >login</button>
        </div>
        <div className='link'>
         <p> Create a new account ! <a href="/">Sign up</a></p> 
        </div>
       </div>
   </>
  )
}

export default Login
