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
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getNews.pending]: (state) => {
            state.isLoading = true;
        },
        [getNews.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getNews.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true;
        }
    }
})

export default newSlice.reducer;