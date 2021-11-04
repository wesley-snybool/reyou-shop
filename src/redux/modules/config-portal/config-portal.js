import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, CONFIG_URL} from '../../services/baseUrl'

export const getConfig = createAsyncThunk(
    'config-thunk',
    async () => {
        const response = await fetch(`${BASE_URL}${CONFIG_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const configSlice = createSlice({
    name: 'press-slice',
    initialState: {
        data: [],
        isLoading: '',
    },
    extraReducers: {
        [getConfig.pending]: (state) => {
            state.isLoading = 'LOADING';
        },
        [getConfig.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = 'SUCCESS';
        },
        [getConfig.rejected]: (state) => {
            state.isLoading = 'REJECTED';
        }
    }
})

export default configSlice.reducer;