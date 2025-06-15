import React from 'react'


export default function Wrap() {

    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range. to you and to your whole nations",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range. to you and to your whole nations",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range. to you and to your whole nations",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range. to you and to your whole nations",
        },
      ]

  return (
    <div className='my-10 mx-4'>
      <h2 className='text-2xl font-bold pb-8 text-center '>Why Choose Us?</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {
            data.map((thing)=>{
                return(
                    <div className="flex flex-col lg:w-[23%] sm:w-[48%] w-[98%] gap-1 justify-center items-center px-4 py-4 bg-gray-400 rounded-md">
                        <div className="w-10 h-10 text-center bg-gray-300 rounded-full flex justify-center items-center"><i className='w-[100%] '>{thing.cover}</i></div>
                        <h4 className="text-md font-bold">{thing.title}</h4>
                        <p className="text-center">{thing.decs}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
