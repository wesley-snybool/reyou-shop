import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, HOT_CONCEPTS_URL} from '../../services/baseUrl'

export const getHotConcepts = createAsyncThunk(
    'concepts/getConcepts',
    async () => {
        const response = await fetch(`${BASE_URL}${HOT_CONCEPTS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const conceptSlice = createSlice({
    name: 'concepts',
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: {
        [getHotConcepts.pending]: (state) => {
            state.isLoading = true;
        },
        [getHotConcepts.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getHotConcepts.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export default conceptSlice.reducer;