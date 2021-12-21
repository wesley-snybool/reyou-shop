import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, MATERIALS} from '../../services/baseUrl'

export const getMaterials = createAsyncThunk(
    'getMaterials-req/getMaterials',
    async () => {
        const response = await fetch(`${BASE_URL}${MATERIALS}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getMaterialSlice = createSlice({
    name: 'types-items',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getMaterials.pending]: (state) => {
            state.isLoading = true;
        },
        [getMaterials.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getMaterials.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getMaterialSlice.reducer;