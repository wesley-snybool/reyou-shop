import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, CATEGORY_PRODUCTS} from '../../services/baseUrl'

export const getCategoryProducts = createAsyncThunk(
    'getCategoryProducts-req/getCategoryProducts',
    async () => {
        const response = await fetch(`${BASE_URL}${CATEGORY_PRODUCTS}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getCategoryProductsSlice = createSlice({
    name: 'category-products',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getCategoryProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getCategoryProducts.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getCategoryProducts.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getCategoryProductsSlice.reducer;