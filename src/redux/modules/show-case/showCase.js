import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, SHOW_CASE} from '../../services/baseUrl'

export const getShowCaseProducts = createAsyncThunk(
    'getShowCase-req/getShowCaseProducts',
    async () => {
        const response = await fetch(`${BASE_URL}${SHOW_CASE}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getShowCaseProductsSlice = createSlice({
    name: 'showCase-products',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getShowCaseProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getShowCaseProducts.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getShowCaseProducts.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getShowCaseProductsSlice.reducer;