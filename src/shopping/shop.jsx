
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



// onClick={()=>carting(item)}
const Shop = ({myItem, shopItem, work, funct}) => {

  const nav = useNavigate();

  function reverse(){
    nav('/');
    funct(false);
  }
  
  return (
    <div>
    
    <div className="w-full">
    <div className="w-full py-10 px-8">
      <div className="m-auto">
        <h2 className="text-3xl font-bold text-center">Flash Deals</h2>
      </div>
  
    <div className="w-full">

    <h2 className='w-55 py-1 px-3 bg-red-500 text-white text-2xl font-bold'>Product Items</h2>
       
    <div className="w-full flex gap-6 flex-wrap py-3">
    
      {
       myItem.map((item)=>{
          return(
             
            <div className="lg:w-[23%] md:w-[31%] sm:w-[42%] w-[70%] px-3 py-4 border border-black">
            <p className="px-2 py-1 text-white bg-red-600 rounded-full inline text-md">{item.discount}% off</p>
            <img className="flash-img" src={item.cover}></img>
            <p className="product-name mb-0.5">{item.name}</p>
            <div className="flash-stars mb-1 ">
                <i className="fa fa-star text-yellow-600"></i>
                <i className="fa fa-star text-yellow-600"></i>
                <i className="fa fa-star text-yellow-600"></i>
                <i className="fa fa-star text-yellow-600"></i>
                <i className="fa fa-star text-yellow-600"></i>
            </div>
            <div className="flex justify-between">
                <p className="cost">${item.price}.00</p>
                <p className="px-2 pb-1 bg-red-500 text-white text-3xl rounded-md cursor-pointer" onClick={()=>shopItem(item)}>+</p>
            </div>
  
            <div className="">
              <p className="colcu">0</p>
              <i className="fa-regular fa-heart" ></i>
            </div>
          </div>

          )
        })
      }
    

    
 
      </div>

      {work && <div><button onClick={reverse} className='bg-red-500 py-1 px-3 text-white rounded-md cursor-pointer'>Back</button></div>}

    </div>
      
    </div>
   </div>

  



  </div>
  )
}

export default Shop
