import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { backendUrl, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify';


const List = ({token}) => {

    const [list,setList] = useState([])

    const fetchList = async () => {
        try {

            const response = await axios.get(backendUrl + '/api/product/list')
            if(response.data.success){
            setList(response.data.products);
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }


    const removeProduct = async (id) => {

        try {
            
            const response = await axios.post(backendUrl + '/api/product/remove',{id} , {headers:{token}})

            if(response.data.success){
                toast.success(response.data.message)
                await fetchList();
            }else{
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }


    useEffect(()=>{
        fetchList()
    },[])

 return (
  <>
    <p className='mb-2 text-lg font-semibold'>ALL PRODUCT LIST</p>
    
    <div className='flex flex-col gap-2'>

      {/* Table Head */}
      <div className='hidden md:grid grid-cols-5 items-center py-2 px-3 border bg-gray-100 text-sm font-semibold'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>

      {/* Product List */}
      {
        list.map((item, index) => (
          <div 
            key={index}
            className='grid grid-cols-3 md:grid-cols-5 items-center gap-2 py-2 px-3 border text-sm'
          >
            <img className='w-12 h-12 object-cover' src={item.image[0]} alt='' />
            <p className='truncate'>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center text-red-500 cursor-pointer text-lg'>×</p>
          </div>
        ))
      }

    </div>
  </>
)

}

export default List
