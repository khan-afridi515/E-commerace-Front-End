import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className='w-full flex md:flex-row flex-col md:gap-8 gap-12 py-15 px-12'>
         <div className='md:w-[48%] w-[94%] flex gap-6 flex-col pt-6'>
            <p className='text-2xl'>Get In Touch</p>
            <h2 className='text-3xl font-bold'>Visit one of our agency location or contact us today</h2>
            <div className='flex flex-col gap-5'>
              <h3 className='text-xl font-bold'>Head Office</h3>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <i class="fa-solid fa-location-dot mt-1 text-xl"></i>
                 <p>Shop#31 blok B Peeranu Market Karkhanu Market Peshawer</p>
                </div>
                <div className='flex gap-4'>
                  <i class="far fa-envelope mt-1 text-xl"></i>
                   <p >contact234@gmail.com</p>
                </div>
                <div className='flex gap-4'>
                <i class="fas fa-phone mt-1 text-xl"></i>
                <p>+91 234 12 143</p>
                </div>
                <div className='flex gap-4'>
                <i class="far fa-clock mt-1 text-xl"></i>
                <p>Monday to Saturday: 9:00am to 16:00am</p>
                </div>
              </div>
            </div>
         </div>
         <div className='md:w-[48%] w-[94%] flex justify-center'>
           <img src="images/contact/b3.jpg" className='w-[90%] h-[90%]'></img>
         </div>
       </div>


       <div className='w-full flex md:flex-row flex-col py-5 pb-6 px-12 md:justify-between pr-50'>
         <div className='md:w-[48%] w-[100%] flex flex-col gap-4'>
          <p className='text-2xl'>Leave a message</p>
          <h2 className='text-3xl font-bold'>We Love to hear from you</h2>
          <form className='flex flex-col gap-4 w-full'>
            <input type='text' className='w-[80%] px-3 py-2 border border-black text-xl outline-none' placeholder='Enter your name'></input>
            <input type='text' className='w-[80%] px-3 py-2 border border-black text-xl outline-none' placeholder='Enter your E-mail'></input>
            <input type='text' className='w-[80%] px-3 py-2 border border-black text-xl outline-none' placeholder='Enter your Subject'></input>
            <textarea type="text" className='w-[80%] h-30 px-3 py-2 border border-black text-xl outline-none' placeholder='Enter your message here'></textarea>
            <button className='w-40 px-4 py-2 text-center text-white bg-green-500 outline-none text-xl font-bold rounded-mdm'>Submit</button>
          </form>
         </div>

         <div className='flex flex-col gap-6 md:pt-5 pt-25 md:mb-1 mb-8'>
            
            <div className='flex gap-6'>
              <img src="images/contact/people/1.png" className='w-18 h-18 rounded flex justify-center items-center'></img>
              <div>
                <h2 className='text-2xl font-bold pb-2'>John Doe</h2>
                <div>
                  <p className='text-xl'>Senior Marketing Manager</p>
                  <p className='text-xl'>Phone: +92 34 45 324</p>
                  <p className='text-xl'>Email: John@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='flex gap-6'>
              <img src="images/contact/people/2.png" className='w-18 h-18 rounded flex justify-center items-center'></img>
              <div>
                <h2 className='text-2xl font-bold pb-2'>Williom smith</h2>
                <div>
                  <p className='text-xl'>Senior Marketing Manager</p>
                  <p className='text-xl'>Phone: +92 34 45 324</p>
                  <p className='text-xl'>Email: John@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='flex gap-6'>
              <img src="images/contact/people/3.png" className='w-18 h-18 rounded flex justify-center items-center'></img>
              <div>
                <h2 className='text-2xl font-bold pb-2'>Emastone</h2>
                <div>
                  <p className='text-xl'>Senior Marketing Manager</p>
                  <p className='text-xl'>Phone: +92 34 45 324</p>
                  <p className='text-xl'>Email: John@gmail.com</p>
                </div>
              </div>
            </div>
            
         </div>

       </div>
    </div>
  )
}

export default Contact
