import React from 'react' 

export default function Foot() {
  return (
    <div className="py-8 px-7 w-full text-white bg-blue-700">
       <div className="container w-full">
       <div className="flex justify-between flex-wrap md:gap-7 sm:gap-12 gap-14 items-center w-full">
        <div className="md:w-[22%] sm:w-[46%] w-[96%]">
            <div className="bonik1">
                <h3 className="text-2xl font-bold text-red-500">Bonik</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </div>
            <div className="flex justify-start items-start gap-4 py-3 px-4">
            <div className='bg-blue-900 p-2 rounded-md flex gap-2'>
                <i class='fa-brands fa-google-play mt-1'></i>
                <span>Google Play</span>
              </div>
              <div className='bg-blue-900 p-2 rounded-md flex gap-2'>
                <i class='fa-brands fa-app-store-ios mt-1'></i>
                <span>App Store</span>
              </div>
            </div>
        </div>

        <div className="md:w-[22%] sm:w-[46%] w-[96%]">
            <h3 className='text-2xl font-bold py-2'>About Us</h3>
            <ul>
             <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="md:w-[22%] sm:w-[46%] w-[96%]">
        <h3 className='text-2xl font-bold py-2'>Customer Care</h3>
            <ul>
            <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
        </div>

        <div className="md:w-[22%] sm:w-[46%] w-[96%]">
        <h3 className='text-2xl font-bold py-2'>Contact Us</h3>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
        </div>
      </div>

       </div>
     
    </div>
  )
}
