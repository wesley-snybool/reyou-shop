import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, RE_YOU_FAVORITES_URL} from '../../services/baseUrl'

export const getReyouFavorites = createAsyncThunk(
    'reyou-req/getReyouFavorites',
    async () => {
        const response = await fetch(`${BASE_URL}${RE_YOU_FAVORITES_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getReyouFavoriteSlice = createSlice({
    name: 'reyou-favorites',
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: {
        [getReyouFavorites.pending]: (state) => {
            state.isLoading = true;
        },
        [getReyouFavorites.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getReyouFavorites.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default getReyouFavoriteSlice.reducer;