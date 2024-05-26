import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";


const initialState = {
    products:[]
  }

export const productSlice = createSlice({
    name:"Cart",
    initialState,
    reducers : {
        addProduct:(state,action)=>{
            state.products.push(action.payload)
        },
        removeProduct:(state,action)=>{
            state.products.filter((product)=>{
                return(
                    product.id !== action.payload.id
                )
            })
        },
        clearCart:(state)=>{
                state.products = []
        }
    }
})  

export const {addProduct,removeProduct,clearCart} = productSlice.actions

export default  productSlice.reducer