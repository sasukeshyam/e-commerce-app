import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=''/>
            <p className='w-full md:w-2/3 text-gray-600'>
            footer lets goo.......
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'></ul>
                <li>+1363723788</li>
                <li>Contect@gmail.com</li>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright</p>
      </div>
    </div>
  )
}

export default Footer
