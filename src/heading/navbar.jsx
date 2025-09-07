import React from 'react'
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
const Navbar = ({find, length, match, funct, product, myUser, setMyUser}) => {

  const [inpVal, setInpVal] = useState("");
  
 

  let show = useRef();
  let bar = useRef();
  let time = useRef();

  function visible(){
    console.log("how")
    show.current.style.display="block";
    bar.current.style.display="none";
    time.current.style.display="block"
  }

  function hidden(){
    console.log("visible")
    show.current.style.display="none";
    bar.current.style.display="block";
    time.current.style.display="none"

  }

  const giveName = localStorage.getItem("username");
  setMyUser(giveName);
  console.log(giveName);
  return (
    <div>
       <section>
         <div className="bg-blue-500 w-full py-3 px-7">
            <div className="flex justify-between text-white flex-col sm:flex-row sm:gap-1 gap-6">
                <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold md:mt-1 sm:mt-2 mt-3 sm:text-left text-center'>Marhaba Watches</h1>
                <div className='flex gap-2 sm:justify-end justify-center'>
                    <input type="text" value={inpVal} onChange={(e)=>setInpVal(e.target.value)} className='lg:w-100 sm:w-70 w-90 border border-white p-2 outline-none text-xl rounded-xl '></input>
                    <Link to="/shop"><button className="lg:w-20 sm:w-15  w-26 border border-white md:h-12 sm:h-17 h-12 px-1 py-1.5 lg:text-xl sm:text-sm text-xl rounded-xl" onClick={()=>find(inpVal)}>Search</button></Link>
                </div>
                {myUser && <h1 className='text-2xl font-bold mt-3'>{myUser}</h1>}
            </div>
            
         </div>

         <div className='bg-orange-400 w-full py-3 px-7 '>
            <div className='flex justify-between text-white'>
                <div className='flex gap-2'>
                  <div className='bg-gray-500 rounded-full flex w-12 h-12 justify-center items-center p-3' onClick={funct}>
                      <i className="fa-solid fa-user text-xl" ></i>
                     </div>
                     <Link to="cart">
                       <div className="bg-gray-500 rounded-full flex w-22 h-12 justify-center items-center px-2 py-1">
                       <i className="fa-sharp fa-solid fa-cart-shopping p-3 text-white"></i>
                       <p className='text-xl mb-1'>({product})</p>
                      </div>
                     </Link>
                </div>

              <div className='flex gap-2'>
              <div className='hidden sm:block'>
              <ul className='flex gap-3 text-white list-none mt-3 text-md font-bold'>
                    <li className='uppercase'><Link to="/">Home</Link></li>
                    <li className='uppercase'><Link to="/about">About</Link></li>
                    <li className='uppercase'><Link to="shop">Shopping</Link></li>
                    <li className='uppercase'><Link to="contact">Contact</Link></li>
                </ul>
              </div>
              <div className='mt-3'>
                <div className='flex'>
   
                <div className='block sm:hidden cursor-pointer' onClick={visible} ref={bar}>
                 <i className="fa-solid fa-bars text-2xl font-bold"></i>
                 </div>
                 <div className='hidden cursor-pointer' onClick={hidden} ref={time}>
                  <i className="fa-solid fa-times text-2xl font-bold" ></i>
                 </div>

                </div>
                 
                 
                 <div className='hidden' ref={show}>
                 <ul className='flex flex-col gap-3 text-white list-none mt-3 text-md font-bold'>
                    <li className='uppercase'><Link to="/">Home</Link></li>
                    <li className='uppercase'><Link to="/about">About</Link></li>
                    <li className='uppercase'><Link to="shop">Shopping</Link></li>
                    <li className='uppercase'><Link to="contact">Contact</Link></li>
                </ul>
              </div>
                 
              </div>
              </div>
              
                
            </div>
            
         </div>
       </section>
    </div>
  ) 
}

export default Navbar
