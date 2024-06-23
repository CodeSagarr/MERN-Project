import axios from 'axios'
import './App.css'
import { useState } from 'react'

function Register() {
     
  const [userData,setUserData] = useState({username:'',email:'',password:''})
  const handleChange =(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
       const res =  await axios.post('/user/register',userData)
       alert(res.data.msg)
       setUserData({username:'',email:'',password:''})
    } catch (error) {
      console.log(error)
    }
     
  }



  return (
   <>
   <div>
    <div className='container'>
        <h1>Register</h1>

        <div className='userForm'>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter username" onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter password" onChange={handleChange}/>

            <button type="submit" onClick={handleSubmit}>Register</button>
        </div>

        <div className='link'>
         <p>Already a member ? <a href="/login">Sign up</a></p> 
        </div>
       </div>
   </div>

   </>
  )
}

export default Register
