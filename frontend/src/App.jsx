import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Register from './Register'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

useEffect(()=>{
  axios.get('/user')
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
})


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <Register/></>}/>
        <Route path='/login' element={<><Login/> </>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
