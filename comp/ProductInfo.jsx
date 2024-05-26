import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../utils/productSlice'
const ProductInfo = (props) => {
  const dispatch = useDispatch()
  const {data} = props  
//   console.log(data.image);
  return (
    <div className="bg-gray-100  rounded-lg p-6 w-full max-w-md mx-auto my-4 h-auto">
    <div className='flex justify-center'>
      <div className="h-40 w-40 bg-gray-300  rounded-md ">
        <img src={data.image} alt="" className='w-full h-full ' />
      </div>
    </div>
      <div className="mt-4">
        <div className="h-4    mb-10 font-bold ">{data.title}</div>
        <div className="h-4    mb-2 ">{data.price}</div>
        <div className="h-4    mb-2  ">{data.category}</div>
      </div>
      <div className='flex justify-center align-middle'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg animate-fade-in" onClick={()=>{
        dispatch(addProduct(data))
        alert("Product added")
      }}>
        ADD +
      </button>
      </div>
    </div>
  )
}

export default ProductInfo