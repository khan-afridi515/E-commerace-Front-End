import React, {useRef, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Sdata from "./slide";


export default function Slide({functi, matchh, clean, hide}) {

 const [index, setIndex]=useState(0)

//  useEffect(()=>{
//   setTimeout(()=>{
//     if(index < Sdata.length){
//       setIndex(index+1);
//     }else{
//       setIndex(0)
//     }
    
//   },2000)
//  },[])


  setTimeout(()=>{
    if(index < Sdata.length-1){
    setIndex(index+1)
  }else{
    setIndex(0)
  }
  },3000)


    

  return (
    <div className="w-full bg-black">
    <div className='p-2 w-50 hidden border border-yellow-600' ref={matchh}>
            {/* <Link to='/signin'><p className='w-full py-2 px-1 bg-yellow-600 text-white mb-1 font-bold'>Sign In</p></Link> */}
            <Link to='/sign'><p className='w-full py-2 px-1 bg-yellow-600 text-white mb-1 font-bold'>Sign Up</p></Link>
            <Link to='/login'><p className='w-full py-2 px-1 bg-yellow-600 text-white mb-1 font-bold'>Login</p></Link>
            <button type="button" className='w-full py-2 px-1 bg-yellow-600 text-white font-bold cursor-pointer text-left' onClick={clean}>Log out</button>
    </div>
     <div className="w-full py-15">
       <div className="w-full " >
          <div className="w-[80%] m-auto flex md:flex-row flex-col md:justify-center justify-start md:items-center justify-start md:gap-0 gap-15" >
              <div className="flex flex-col gap-5 justify-center items-start w-[48%] text-white">
                <h1 className="text-6xl font-bold w-100" id="unit">{Sdata[index].title}</h1>
                <p className="unit-para" id="unit">{Sdata[index].desc}</p>
                <button className="py-2 px-5 border border-white text-white rounded-md hover:bg-red-500" id="unit">Visit Collection</button>
              </div>
              <div className="md:w-[48%] w-[75%] md:h-120 h-60 flex justify-center items-center md:m-0 m-auto">
                <img src={Sdata[index].cover} className="w-[60%]"></img>
              </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* <div className={index === 0 ? "btn-1 brown":"btn-1"} onClick={()=>{setIndex(0)}}></div>
            <div className={index === 1 ? "btn-1 brown":"btn-1"} onClick={()=>{setIndex(1)}}></div>
            <div className={index === 2 ? "btn-1 brown":"btn-1"} onClick={()=>{setIndex(2)}}></div>
            <div className={index === 3 ? "btn-1 brown":"btn-1"} onClick={()=>{setIndex(3)}}></div> */}

            <div className={index === 0 ? ("bg-red-700 w-4 h-4 rounded-full text-white"):("bg-white w-4 h-4 rounded-full text-white")} onClick={()=>{setIndex(0)}}></div>
            <div className={index === 1 ? ("bg-red-700 w-4 h-4 rounded-full text-white"):("bg-white w-4 h-4 rounded-full text-white")} onClick={()=>{setIndex(1)}} ></div>
            <div className={index === 2 ? ("bg-red-700 w-4 h-4 rounded-full text-white"):("bg-white w-4 h-4 rounded-full text-white")} onClick={()=>{setIndex(2)}} ></div>
            <div className={index === 3 ? ("bg-red-600 w-4 h-4 rounded-full text-white"):("bg-white w-4 h-4 rounded-full text-white")} onClick={()=>{setIndex(3)}} ></div>

          </div>
         </div>
     </div>
    </div>
  )
}
