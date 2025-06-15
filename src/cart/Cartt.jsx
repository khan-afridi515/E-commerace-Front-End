import React, {useState} from 'react'

const Cartt = ({array, cart, decrease, clear, holeQty}) => {
     const grandTotal = array.reduce((sum, record)=> sum + record.qty*record.price, 0);
     
     
     

     
    
    console.log("How are you people",array);
  return (
    <div>
       <div className='py-6'>
        <h1 className='text-center text-3xl font-bold py-4'>Cart Section</h1>
        <div  className='flex lg:flex-row flex-col gap-8 px-8'>

        <table className='border border-black m-auto w-[62%]'>
                <thead>
                    <tr>
                        <th  className="border border-black py-1 px-2">S/No</th>
                        <th  className="border border-black py-1 px-2">Product Name</th>
                        <th  className="border border-black py-1 px-2">Product Image</th>

                        <th  className="border border-black py-1 px-2">Price</th>
                        <th  className="border border-black py-1 px-2">QTY</th>
                        <th  className="border border-black py-1 px-2">Increase</th>
                        <th  className="border border-black py-1 px-2">Decrease</th>
                        <th  className="border border-black py-1 px-2">TotalPrice</th>
                    </tr>
                </thead>

        {
          array.map((categ, index)=>{
            return(
                <>
                
                <tbody>
                    <tr>
                        <td  className='border border-black py-1 px-2'>{index+1}</td>
                        <td  className='border border-black py-1 px-2'>{categ.name}</td>
                        <td  className='border border-black py-1 px-2'><img src={categ.cover} className='w-25 h-20'></img></td>
                        <td  className='border border-black py-1 px-2'>{categ.price}</td>
                        <td  className='border border-black py-1 px-2'>{categ.qty}</td>
                        <td  className='border border-black py-1 px-2 cursor-pointer' onClick={()=>cart(categ)}>+</td>
                        <td  className='border border-black py-1 px-2 cursor-pointer' onClick={()=>decrease(categ)}>-</td>
                        <td  className='border border-black py-1 px-2'>{categ.price*categ.qty}</td>
                    </tr>
                </tbody>
            
                
                </>
                
            )
          })
        }

</table>
    
    <div className='lg:w-[18%] w-[60%] lg:m-0 m-auto '>
        <h1 className='border border-black py- px-3 text-center text-xl font-bold bg-red-800 text-white'>Grand Total</h1>
        <table className='w-[100%]'>
           <tbody className='w-[100%]'>
           <tr className='w-[100%]'>
                <td className='text-sm font-bold border border-black p-1 w-[50%]'>Total Price</td>
                <td className='border border-black p-1 w-[50%]'>{grandTotal}</td>
            </tr>
           </tbody>
            
        </table>
    </div>
       

    </div>


    {
      array.length && (<div className='flex justify-center items-center my-6'><button className='px-4 py-2 bg-yellow-600 rounded-md text-white cursor-pointer' onClick={clear}>Clear All</button></div>)
    }
    
       
       </div>
    </div>
  )
}

export default Cartt
