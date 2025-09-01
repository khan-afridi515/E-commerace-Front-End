import React, { useState, useRef } from 'react'
import axios from 'axios';
import {url1} from './api2/first';
import {url2} from './api2/end';
import {useNavigate} from "react-router-dom";

const Sign = () => {
  const nav = useNavigate();
 const [img, setImg]=useState("");

 const [username, setUsername] = useState("");
 const [fatherName, setFatherName] = useState("");
 const [contact, setContact] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [CPass, setCPass] = useState("");
 const [address, setAddress] = useState("");


 
  const inp1 = useRef();
  const inp2 = useRef();
  const rabita = useRef();
  const mail = useRef();
  const word = useRef();
  const Cword = useRef();
  const adddress = useRef();

  function name(){
    if(username === ""){
      inp1.current.innerText="Enter name here!";
      return false
    }
    inp1.current.innerText="";
    return true;
  }

  function Fname(){
    if(fatherName === ""){
      inp2.current.innerText="Enter father name here!";
      return false
    }
    inp2.current.innerText="";
    return true;
  }


  function contactt(){
    if(contact === ""){
      rabita.current.innerText="Enter contact here!";
      return false
    }
    rabita.current.innerText="";
    return true;
  }

  function mailing(){
    if(email === ""){
      mail.current.innerText="Enter email here!";
      return false
    }
    mail.current.innerText="";
    return true;
  }

  function authentic(){
    if(password === ""){
      word.current.innerText="Enter password here!";
      return false
    }
    word.current.innerText="";
    return true;
  }

  function Cauthentic(){
    if(CPass === ""){
      Cword.current.innerText="Enter confirm password here!";
      return false
    }
    Cword.current.innerText="";
    return true;
  }

  function location(){
    if(address === ""){
      adddress.current.innerText="Enter Address here!";
      return false;
    }
    adddress.current.innerText="";
    return true;
  }

  function submit(e){
    e.preventDefault();
    if(name() && Fname() && contactt() && mailing()  && authentic() && Cauthentic() && location()){
      if(password !== CPass){
        alert("Your password and confirm password doesn't match!")
      }else{
        const msg2 = localStorage.getItem("msg");

        const newClient = {
          username : username,
          fatherName : fatherName,
          contact : contact,
          email : email,
          password : password,
          address : address
       }
      
       const holeUrl2 = url1 + url2;
       
       console.log(holeUrl2);
       
       axios.post(holeUrl2, newClient)
       .then((res) => {
         console.log("this is response",res);
         const sentMsg = res.data.msg

         localStorage.setItem("msg",sentMsg);
         console.log(res.data.msg)
         alert(res.data.msg);
         nav('/');
       })
      
      }
      
    }
  } 
  
  
  return (
    <div className='flex justify-center items-center my-20'>
      <form className='border border-black md:w-180  sm:w-150  w-130 px-8 py-4 rounded-md flex flex-col' onSubmit={submit}>
        <h1 className='text-2xl font-bold text-center'>Sign Up Form</h1>

        <img src="man.jpg" className='w-40 h-40 rounded-full m-auto my-6 border-2xl border-green-500'></img>
        <input type="file" name="file" ></input>
        <div className='w-[100%] my-7'>

          <div className='w-[100%] flex sm:flex-row flex-col gap-4 mb-6'>
            <div className='sm:w-[48%] w-[98%] flex flex-col'>
                <label className='font-bold mb-1'>Name:</label>
                <input type="text" placeholder='Enter name here...' className='px-2 py-1 outline-none border' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <p className='text-red-500' ref={inp1}></p>
            </div>
            <div className='sm:w-[48%] w-[98%] flex flex-col'>
                <label className='font-bold mb-1'>Father Name:</label>
                <input type="text" placeholder='Enter father name here...' value={fatherName} onChange={(e)=>setFatherName(e.target.value)} className='px-2 py-1 outline-none border'></input>
                <p className='text-red-500' ref={inp2}></p>
            </div>
          </div>

          <div className='w-[100%] flex sm:flex-row flex-col gap-4 mb-6'>
            <div className='sm:w-[48%] w-[98%] flex flex-col'>
                <label className='font-bold mb-1'>Contact:</label>
                <input type="text" placeholder='Enter phone number here...' value={contact} onChange={(e)=>setContact(e.target.value)} className='px-2 py-1 outline-none border'></input>
                <p className='text-red-500' ref={rabita}></p>
            </div>
            <div className='sm:w-[48%] w-[98%] flex flex-col'>
                <label className='font-bold mb-1'>Email:</label>
                <input type="email" placeholder='Enter email here...' value={email} onChange={(e)=>setEmail(e.target.value)} className='px-2 py-1 outline-none border'></input>
                <p className='text-red-500' ref={mail}></p>
            </div>
           </div>

           <div className='w-[100%] flex sm:flex-row flex-col gap-4 mb-6'>
            <div className='sm:w-[48%] w-[98%] flex flex-col'>
                <label className='font-bold mb-1'>Password:</label>
                <input type="password" placeholder='Enter password here...' vlaue={password} onChange={(e)=>setPassword(e.target.value)} className='px-2 py-1 outline-none border'></input>
                <p className='text-red-500' ref={word}></p>
            </div>
            <div className='sm:w-[48%] w-[98%] flex flex-col'>
                <label className='font-bold mb-1'>Confirm Password:</label>
                <input type="password" placeholder='Enter confirm password herr...' value={CPass} onChange={(e)=>setCPass(e.target.value)} className='px-2 py-1 outline-none border'></input>
                <p className='text-red-500' ref={Cword}></p>
            </div>
           </div>
          
           <div className='w-[100%] mb-6'>
            <div className='w-[100%] flex flex-col'>
                <label className='font-bold mb-1 w-[100%]'>Address:</label>
                <textarea type="password" placeholder='Enter Address here...' value={address} onChange={(e)=>setAddress(e.target.value)} className='px-2 py-1 outline-none border'></textarea>
                <p className='text-red-500' ref={adddress}></p>
            </div>
           </div>
         
           <div className='flex justify-center items-center'>
              <button className='py-2 px-6 bg-green-500 text-white outline-none m-auto w-30 rounded-md cursor-pointer' type="submit">Submit</button>  
           </div>
           
        </div>
         
      </form>
    </div>
  )
}

export default Sign
