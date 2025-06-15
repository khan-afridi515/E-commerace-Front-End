import React, {useState, useEffect} from 'react'
import {Add_user} from "./api/apiUrl";
import {loginUrl} from "./api/login";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const Login = ({protect, clear}) => {

    const nav = useNavigate();

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [msg, setMsg] = useState('')

   

 
  
    function sendData(e){
       e.preventDefault();

       
         const newUserData = {
          email: email, password: password
       }
  
       console.log("userData", newUserData);
  
       const HoleUrl = Add_user + loginUrl;
    
       console.log(HoleUrl);
       axios.post(HoleUrl, newUserData)
        .then((res) => {
          console.log("This is my response",res)
          console.log("This is proper data",res.data.userToken)
          const TokenData = res.data.userToken
          localStorage.setItem("token",TokenData)
          setMsg(res.data);
          nav('/')
          
        })
        .catch((err)=>{ console.log(err)})

        
  }

  return (
    <div>
       <div className='py-8 px-4 flex flex-col justify-center items-center bg-blue-700 border border-2xl border-white w-80 m-auto my-10 rounded-md'>
          <h1 className='py-4 text-center text-3xl font-bold text-yellow-600'>Log In {msg}</h1>
          <form className='w-full'>
          <div className='flex flex-col gap-5 my-8 w-full justify-center items-center'>
            <input type="text" label={'username'} Value={email} onChange={(e)=>setEmail(e.target.value)} errorMessage={emailError} placeholder='Email' className='px-1 py-1 border-none bg-white w-[80%] rounded-md outline-none text-md '></input>
            <input type="password" label={'password'} Value={password} onChange={(e)=>setPassword(e.target.value)} errorMessage={passwordError} placeholder='Password' className='px-1 py-1 border-none bg-white w-[80%] rounded-md outline-none'></input>
            
          </div>
          <div className='flex justify-center items-center'>
             <button type='button' className='w-[80%] p-1 bg-yellow-700 text-white text-center rounded-md font-bold text-xl cursor-pointer' onClick={sendData}>Submit</button>
          </div>
          
          </form>
          
       </div>
    </div>
  )
}

export default Login
