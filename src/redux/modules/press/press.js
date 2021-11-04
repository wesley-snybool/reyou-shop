import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, PRESS_URL} from '../../services/baseUrl'

export const getPress = createAsyncThunk(
    'press-thunk',
    async () => {
        const response = await fetch(`${BASE_URL}${PRESS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const pressSlice = createSlice({
    name: 'press-slice',
    initialState: {
        data: [],
        isLoading: '',
    },
    extraReducers: {
        [getPress.pending]: (state) => {
            state.isLoading = 'LOADING';
        },
        [getPress.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = 'SUCCESS';
        },
        [getPress.rejected]: (state) => {
            state.isLoading = 'REJECTED';
        }
    }
})

export default pressSlice.reducer;