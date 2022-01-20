import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL, FLIP_CARDS_URL } from '../../services/baseUrl'

export const getFlipCard = createAsyncThunk(
    'flip-cards/getFlipCard',
    async () => {
        const response = await fetch(`${BASE_URL}${FLIP_CARDS_URL}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const flipCardSlice = createSlice({
    name: 'flip-cards',
    initialState: {
        data: [],
        isLoading: '',
    },
    extraReducers: {
        [getFlipCard.pending]: (state) => {
            state.isLoading = 'LOADING';
        },
        [getFlipCard.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = 'SUCCESS';
        },
        [getFlipCard.rejected]: (state) => {
            state.isLoading = 'REJECTED';
        }
    }
})

export default flipCardSlice.reducer;