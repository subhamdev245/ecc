import React from 'react'
import { useSelector } from 'react-redux';
import ProductDemo from './ProductDemo';

const Cart = () => {
    const product = useSelector((store)=>{
        return store.products
   })
  if(product.length !== 0){
    return (
        <div>{
           product.map((data,index)=>{
            return(
                <div key={index}>
                    <ProductDemo data={data}/>
                </div>
            )
           }) 
            }</div>
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