import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {BASE_URL, TYPE_ITEMS} from '../../services/baseUrl'

export const getTypesItems = createAsyncThunk(
    'getTypeItems-req/getTypesItems',
    async () => {
        const response = await fetch(`${BASE_URL}${TYPE_ITEMS}`);
        const formatResponse = await response.json();
        return formatResponse;
    }
);

export const getTypesItemsSlice = createSlice({
    name: 'types-items',
    initialState: {
        data: [],
        isLoading: false,
        error: {
            error_status: false,
            message: 'Erro ao carregar os dados'
        },
    },
    extraReducers: {
        [getTypesItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getTypesItems.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },
        [getTypesItems.rejected]: (state) => {
            state.isLoading = false;
            state.error.error_status = true
        }
    }
})

export default getTypesItemsSlice.reducer;