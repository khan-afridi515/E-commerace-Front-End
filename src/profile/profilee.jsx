import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Editurl } from '../SignUp/api1/update';
import { Add_user } from '../SignUp/api/apiUrl';
import axios from 'axios';



const Profile = ({userprofile, userpro}) => {

  const [editName, setEditName] = useState();
  const [info, setInfo] = useState();
  const [profileId, setProfileId] = useState();
  const [editPic, setEditPic] = useState();

  
  
  
  const holeEditUrl = Add_user+Editurl+profileId;
  
  const sit = useRef();
  const pen = useRef();

  const handlePic=(e)=>{
    const Imgpath = e.target.files[0];
    setEditPic(Imgpath);
  }
  
  function show(){
    sit.current.style.display = "block"
    pen.current.style.display = "none"
  }
  
  const updateFormData = new FormData();

  updateFormData.append("username",editName);
  updateFormData.append("img", editPic)

  function hide(){
     sit.current.style.display = "none"
     pen.current.style.display = "block"
  }
 
  function sending(e){
    console.log("my Url", holeEditUrl);
    e.preventDefault();
    
    if(!editName || !editPic){
      alert("Please enter name")
    }else{
      axios.put(holeEditUrl, updateFormData)
      .then((res)=>{
        console.log("Successfully updated",res);
        const newIdea = {
          ...info,
          username: res.data.updateData.username,
          img: res.data.updateData.img
        }
        userprofile(res.data.updateData.img);
        setInfo(newIdea);
        localStorage.setItem("proData", JSON.stringify(res.data.updateData));
      })
    }
  }
  
  
  useEffect(()=>{
    const myDataProfile = localStorage.getItem("proData");
    console.log("mydata1",myDataProfile);
    if(myDataProfile){
      const parsed = myDataProfile ? JSON.parse(myDataProfile) : null;
      
      setProfileId(parsed._id);
      const rabta = parsed.contact;
      const rabta2 = rabta.slice(1);
      const rabta3 = "+"+rabta2
      setInfo(parsed)
    }else{
      const myProData = localStorage.getItem("myProfileData");
      console.log("myData2",myProData);
      const parsed2 = myProData ? JSON.parse(myProData) : null;
      
      setProfileId(parsed2._id);
      const rabta = parsed2.contact;
      const rabta2 = rabta.slice(1);
      const rabta3 = "+"+rabta2
      setInfo(parsed2);
      
    }
},[])
  
  console.log("myinfo",info);
  
  return (
    <div>
    <div className='relative'>
      <div className='flex justify-between w-full h-70 bg-blue-500'>
      <Link to="/"><i class="fa-solid fa-angle-left mt-5 ml-3 cursor-pointer text-white text-3xl font-bold"></i></Link>
      <div className='mt-6 mr-6'>
        <div className='hidden' ref={sit}>
        <form action=""  onSubmit={sending} className=' flex flex-col gap-2 justify-between items-between w-55 px-3 py-4 border-2 border-black'>
        <i  onClick={hide} className='float-right fa-regular fa-circle-xmark text-2xl font-bold text-white cursor-pointer'></i>
          <h2 className='text-white text-2xl font-bold text-center'>Edit</h2>
          <input type="text" value={editName} onChange={(e)=>setEditName(e.target.value)} className='w-[90%] px-2 py-1 outline-none border border-black bg-white m-auto'></input>
          <input type="file" accept="image/*" onChange={handlePic} className='w-[90%] px-2 py-1 outline-none border border-black bg-white m-auto'></input>
          <button type="submit" className='py-1 px-2 border-none oultine-none bg-orange-400 text-xl font-bold w-[90%] m-auto text-white cursor-pointer'>Edit</button>
        </form>
        </div>
        {/* class="fa-regular fa-circle-xmark" */}

        <div className='text-2xl font-bold text-white cursor-pointer' ref={pen} onClick={show}>
        <i class="fa-solid fa-pencil"></i>
        </div>
      </div>
    </div>
    <div className='w-full h-6 bg-orange-400'></div>
    {info && (<><div className='absolute top-53 left-9'>
        <img src={info.img} className='w-38 h-38 rounded-full border-5 border-black'></img>
     </div>
       <div className='absolute top-92 left-7'>
        <h1 className='text-3xl font-bold mb-1'>{info.username}</h1>
        <p>{info.contact} | {info.email} | {info.address}</p>
       </div></>)}
      </div>
      
    </div>
  )
}

export default Profile
