import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL, PRESS_URL } from '../../services/baseUrl'

export const getPress = createAsyncThunk(
    'press/thunk',
    async () => {
        const response = await fetch(`${BASE_URL}${PRESS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const pressSlice = createSlice({
    name: 'press',
    initialState: {
        data: [],
        isLoading: false,
    },
    extraReducers: {
        [getPress.pending]: (state) => {
            state.isLoading = true;
        },
        [getPress.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getPress.rejected]: (state) => {
            state.error_status = true;
        }
    }
})

export default pressSlice.reducer;