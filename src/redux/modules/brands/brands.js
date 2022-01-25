import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL, BRANDS } from '../../services/baseUrl'

export const getBrands = createAsyncThunk(
    'getBrands-req/getBrands',
    async () => {
        const response = await fetch(`${BASE_URL}${BRANDS}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getBrandsSlice = createSlice({
    name: 'brands',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getBrands.pending]: (state) => {
            state.isLoading = true;
        },
        [getBrands.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getBrands.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getBrandsSlice.reducer;