import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import cartListSlice from "./slices/cartListSlice";

const store=configureStore({
    reducer:{
 
        wishlistReducer:wishListSlice,
        cartlistReducer:cartListSlice
        
        
    }
})

export default store