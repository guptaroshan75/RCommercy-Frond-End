import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    products: [],
}

export const asyncFetchAllProducts = createAsyncThunk('home/fetchAllProducts', async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        return data;
    } 
    catch (error) {
        toast.error(error.message)
    }
})

const HomeSlice = createSlice({
    name : "HomeSlice",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(asyncFetchAllProducts.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(asyncFetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
    }
})

export default HomeSlice.reducer;