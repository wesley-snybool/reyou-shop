import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, PUBLICITY_URL} from '../../services/baseUrl'

export const getPublicity = createAsyncThunk(
    'publicity/getPublicity',
    async () => {
        const response = await fetch(`${BASE_URL}${PUBLICITY_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getPublicitySlice = createSlice({
    name: 'publicity',
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: {
        [getPublicity.pending]: (state) => {
            state.isLoading = true;
        },
        [getPublicity.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getPublicity.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default getPublicitySlice.reducer;