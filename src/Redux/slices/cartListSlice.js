import { createSlice } from "@reduxjs/toolkit";

const cartListSlice=createSlice({
     name:"cartList",
     initialState:[],
     reducers:{
            addToCartList:(state,action)=>{
                state.push(action.payload)

            },
            deleteFromCartlist:(state,action)=>{
                return state.filter(item=>item.id!=action.payload)
            },
            emptyCart:((state)=>{
                return state=[];
            })
     }
})


export const {addToCartList,deleteFromCartlist,emptyCart}=cartListSlice.actions;
export default cartListSlice.reducer;
