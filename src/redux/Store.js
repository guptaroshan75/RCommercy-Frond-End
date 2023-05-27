import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/CartSlice";
import HomeReducer from "./features/HomeSlice";

const Store = configureStore({
    reducer: {
        Home: HomeReducer,
        Cart: CartReducer,
    }
})

export default Store;