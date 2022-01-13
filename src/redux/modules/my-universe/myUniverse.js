import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, MY_UNIVERSE} from '../../services/baseUrl'

export const getMyUniverse = createAsyncThunk(
    'getMyUniverse-req/getMyUniverse',
    async () => {
        const response = await fetch(`${BASE_URL}${MY_UNIVERSE}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getMyUniverseSlice = createSlice({
    name: 'my-universe',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getMyUniverse.pending]: (state) => {
            state.isLoading = true;
        },
        [getMyUniverse.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getMyUniverse.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getMyUniverseSlice.reducer;