/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataWithProperties } from "../firebase/globalFnc";

export const fetchSpecialProduct = createAsyncThunk('special/fetch', async() => {
    const data = await fetchDataWithProperties('products', 'special', true)
    return data;
})
const initialState = {
    isPending : false,
    data : null
}

const special = createSlice({
    name: 'special',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
        .addCase(
            fetchSpecialProduct.pending, (state) => {
                state.isPending = true
            }
        )
        .addCase(
            fetchSpecialProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            }   
        )
    })

})


export default special