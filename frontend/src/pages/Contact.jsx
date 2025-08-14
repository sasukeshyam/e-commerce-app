import React from 'react'
import Title from '../context/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTaCT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p>Our store</p>
          <p>jncksfcbeicubaeiuc</p>
          <p>9836353672</p>
          <p></p>
          <p></p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore job</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact



// <div className='text-2xl text-center pt-8 border-t'>
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>
//         <div className='my-10 flex-col md:flex-row gap-16'>
//           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//             <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//               <p>Dummy text</p>
//               <p>baieubciaebceiu</p>
//               <b className='text-gray-800'>Our mission</b>
//               <p>sdnadiudinwdkasjdniauha</p>
//             </div>
//         </div>

//         <div autoCapitalize='text-xl py-4'>
//           <Title text1={'WHY'} text2={'CHOUSE US'} />
//         </div>

//         <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality assurance</b>
//           </div>
//         </div>
//         <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality assurance</b>
//           </div>
//         </div>
//         <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality assurance</b>
//           </div>
//         </div>
//         <NewsletterBox/>
//     </div>
//   )
// }