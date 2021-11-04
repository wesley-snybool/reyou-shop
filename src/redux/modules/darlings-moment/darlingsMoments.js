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
        isLoading: '',
    },
    extraReducers: {
        [getDarlingMoments.pending]: (state) => {
            state.isLoading = 'LOADING';
        },
        [getDarlingMoments.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = 'SUCCESS';
        },
        [getDarlingMoments.rejected]: (state) => {
            state.isLoading = 'REJECTED';
        }
    }
})

export default darlingMomentsSlice.reducer;