import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, BANNERS_URL} from '../../services/baseUrl'

export const getBanner = createAsyncThunk(
    'banner/getBanner',
    async () => {
        const response = await fetch(`${BASE_URL}${BANNERS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const bannerSlice = createSlice({
    name: 'banner',
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: {
        [getBanner.pending]: (state) => {
            state.isLoading = true;
        },
        [getBanner.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getBanner.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default bannerSlice.reducer;