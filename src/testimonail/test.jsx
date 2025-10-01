import React, {useState} from 'react'

const Test = () => {
    const testitems =[
        {
            name: "Jibran Ahmad",
            post: "CEO of national fertillizer company",
            view: "This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product",
            cover: "./images/test/avt-img.jpg"
        },
        {
          name: "Ammaar khan",
          post: "Managing Director of ZRK group",
          view: "This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product",
          cover: "./images/test/DN (1).jpg"
      },
      {
        name: "Kaleem jan",
        post: "Young youth partilementerian",
        view: "This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product",
        cover: "./images/test/DN (913).jpg"
     },
     {
      name: "Shams Ur Rahmand",
      post: "President of chamber of commerace",
      view: "This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product",
      cover: "./images/test/Group 1.png"
    },
    {
      name: "Wali Ullah",
      post: "Assistent CEO of national fertillizer company",
      view: "This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product. This shop has very food services and product are international standards which impressed me very much I like to shop here product",
      cover: "./images/test/stuff-img-04.jpg"
  },
    ]

    const [digit, setDigit] = useState(0)
   
    function increase(){
      if(digit === 3){
        setDigit(3)
        console.log(digit)
      }else
      {
        setDigit(digit+1)
      }
    }

    function decrease(){
      if(digit === 0){
        setDigit(0)
        console.log(digit)
      }else{
        setDigit(digit-1)
      } 
    }

  return (
    <div className='bg-yellow-400 pb-7 pt-5  pb-3 px-6 flex flex-col gap-5 mb-8'>
        <h1 className='text-3xl font-bold text-center text-white'>Testimonials</h1>
       <div className='w-full flex md:flex-row flex-col gap-6 justify-center items-center'>
         <div className='md:w-[46%] w-[80%] flex flex-col gap-4 border border-gray-700 p-4 rounded-md bg-gray-500 text-white'>
           <div className='w-full'><p>{testitems[digit].view}</p></div>
           <div className='flex gap-3'>
             <img src={testitems[digit].cover} className='w-20 h-20 rounded-full'></img>
             <div className='flex flex-col justify-end '>
               <h3 className='text-md font-bold'>{testitems[digit].name}</h3>
               <p>{testitems[digit].post}</p>
             </div>
           </div>
         </div>

         <div className='md:w-[46%] w-[80%] flex flex-col gap-4 border border-gray-700 p-4 rounded-md bg-gray-500 text-white'>
         <div className=''>
          <p>{testitems[digit+1].view}</p></div>
           <div className='flex gap-3'>
             <img src={testitems[digit+1].cover} className='w-20 h-20 rounded-full'></img>
             <div className='flex flex-col justify-end pb-2'>
               <h3>{testitems[digit+1].name}</h3>
               <p>{testitems[digit+1].post}</p>
             </div>
           </div>
         </div>

       </div>

       <div className='flex justify-center gap-1'>
        <button className='w-10 h-10 rounded-full text-white bg-gray-500 flex justify-center items-center cursor-pointer ' onClick={increase}>Next</button>
        <button className='w-10 h-10 rounded-full text-white bg-gray-500 flex justify-center items-center cursor-pointer' onClick={decrease}>Prev</button>
       </div>
    </div>
  )
}

export default Test
