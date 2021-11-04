import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, NEWS_URL} from '../../services/baseUrl'

export const getNews = createAsyncThunk(
    'news-thunk',
    async () => {
        const response = await fetch(`${BASE_URL}${NEWS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const newSlice = createSlice({
    name: 'news-slice',
    initialState: {
        data: [],
        isLoading: '',
    },
    extraReducers: {
        [getNews.pending]: (state) => {
            state.isLoading = 'LOADING';
        },
        [getNews.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = 'SUCCESS';
        },
        [getNews.rejected]: (state) => {
            state.isLoading = 'REJECTED';
        }
    }
})

export default newSlice.reducer;