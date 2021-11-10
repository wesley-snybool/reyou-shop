import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, DARLING_MOMENTS_URL} from '../../services/baseUrl'

export const getDarlingMoments = createAsyncThunk(
    'darling-moments/getDarlingMoments',
    async () => {
        const response = await fetch(`${BASE_URL}${DARLING_MOMENTS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const darlingMomentsSlice = createSlice({
    name: 'darling-moments',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getDarlingMoments.pending]: (state) => {
            state.isLoading = true;
        },
        [getDarlingMoments.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getDarlingMoments.rejected]: (state) => {
            state.error.error_status = true
        }
    }
})

export const useSelectDarling = (state) => state.data;


export default darlingMomentsSlice.reducer;