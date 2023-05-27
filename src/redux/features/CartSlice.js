import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    products: [],
};

export const asyncAddProductToCart = createAsyncThunk('cart/addProductToCart', async (product) => {
    try {
        toast.success('Product Added Successfully');
        return product;
    } 
    catch (error) {
        toast.error(error.message);
    }
})

export const asyncRemoveProductFromCart = createAsyncThunk('cart/removeProductFromCart', async (productID, thunkAPI) => {
    try {
        const { Cart : { products } } = thunkAPI.getState();
        const newProducts = products.filter( product => product.id !== productID );
        toast.error('Product Remove Successfully');
        return newProducts;
    } 
    catch (error) {
        toast.error(error.message);
    }
})

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(asyncAddProductToCart.pending, (state, action) => {
            state.loading = false;
        })
        .addCase(asyncAddProductToCart.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        })
        .addCase(asyncRemoveProductFromCart.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
    }
})

export default cartSlice.reducer;
