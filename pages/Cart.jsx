import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ProductDemo from './ProductDemo';
import { clearCart } from '../utils/productSlice';
const Cart = () => {
    const product = useSelector((store)=>{
        return store.products
   })
   const dispatch = useDispatch()
  if(product.length !== 0){
    return (
        <><div>{
           product.map((data,index)=>{
            return(
                <div key={index}>
                    <ProductDemo data={data}/>
                </div>
            )
           }) 
            }
            </div>
            <div className='flex justify-center items-center'>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg animate-fade-in"
            onClick={()=>{
                dispatch(clearCart())
            }}
            >
                Clear cart
            </button>
            </div>   
          </>  
      )
  }
  else {
    return (
        <div className='text-2xl font-extrabold text-red-600 text-center mt-5'>
            No Item Found
        </div>
    )
  }
}


export default Cart