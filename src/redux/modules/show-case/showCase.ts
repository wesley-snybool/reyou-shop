import axios from 'axios'
import qs from 'qs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL, SHOW_CASE } from '../../services/baseUrl'
import { TypeFecth } from 'src/types/types'

const initialState = {
    data: [],
    isLoading: false,
    error: {
        error_status: false,
        error_message: 'Falha ao buscar os dados',
    },
 } as TypeFecth;

export const getShowCaseProducts = createAsyncThunk(
'getShowCase-req/getShowCaseProducts',
    async (filter: any) => {
        const fetchDados = await axios.get(`${BASE_URL}${SHOW_CASE}`, {
            params: {
                pc: filter.pc,
                pps: filter.pps,
                ftr_universe: filter.ftr_universe,
                ftr_state: filter.ftr_state_products,
                ftr_category: filter.ftr_category,
                ftr_typeItem: filter.ftr_typeItem,
                ftr_brand: filter.ftr_brand,
                ftr_material: filter.ftr_material,
                ftr_priceMin: filter.ftr_priceMin,
                ftr_priceMax: filter.ftr_priceMax,
            },
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        })
        const formatData = fetchDados.data
        return  formatData;
    }
);

export const getShowCaseProductsSlice = createSlice({
    name: 'showCase-products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getShowCaseProducts.pending, (state) => {
            return {...state, isLoading: true,};
          }),
        builder.addCase(getShowCaseProducts.fulfilled, (state, action,) => {
            return {
                ...state, 
                isLoading: false, 
                error: { error_status: false, error_message: 'Falha ao carregar os dados'},
                data: action.payload
            };
        }),
        builder.addCase(getShowCaseProducts.rejected, (state) => {
        return {...state, isLoading: false, error: { error_status: true, error_message: 'Falha ao carregar os dados'  }};
        })
    },
})

export default getShowCaseProductsSlice.reducer;