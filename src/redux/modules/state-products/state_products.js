import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, STATE_PRODUCTS} from '../../services/baseUrl'

export const getStateProducts = createAsyncThunk(
    'getStateProducts-req/getStateProducts',
    async () => {
        const response = await fetch(`${BASE_URL}${STATE_PRODUCTS}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getStateProductsSlice = createSlice({
    name: 'state-products',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getStateProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getStateProducts.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getStateProducts.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getStateProductsSlice.reducer;