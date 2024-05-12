import React, { useEffect, useState } from 'react'
import ProductInfo from '../comp/ProductInfo';
import ProductShimmer from '../comp/ProductShimmer';
import { productapi } from '../utils/const'
// import UseApi from '../utils/UseApi';



const Product = () => {
    const [apiData,SetApiData] = useState([]);
    useEffect(()=>{
      fetch(productapi).then((res) => res.json()).then( res =>
        SetApiData(res)
      )
    },[])
    if (apiData.length !== 0) {
      return (
        <div className='flex gap-5 justify-around flex-wrap'>
          {apiData.map((e,index) => {
            return (
              <ProductInfo key={e.id}  data = {e}/>
            )
          })}
        </div>
      )
    }
    else {
      return (
        <ProductShimmer />
      )
    }
  
}

export default Product