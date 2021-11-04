import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, BLOG_URL} from '../../services/baseUrl'

export const getBlogs = createAsyncThunk(
    'blogs-thunk',
    async () => {
        const response = await fetch(`${BASE_URL}${BLOG_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const blogSlice = createSlice({
    name: 'blogs-slice',
    initialState: {
        data: [],
        isLoading: '',
    },
    extraReducers: {
        [getBlogs.pending]: (state) => {
            state.isLoading = 'LOADING';
        },
        [getBlogs.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = 'SUCCESS';
        },
        [getBlogs.rejected]: (state) => {
            state.isLoading = 'REJECTED';
        }
    }
})

export default blogSlice.reducer;