import axios from 'axios'
import qs from 'qs'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL, SHOW_CASE } from '../../services/baseUrl'
import { data } from 'jquery';
import { Attachment, Brand, Category } from '@framework/types';

type TypeProducts = {
    productname: string,
    id?: number | string;
    thumbnail?: string;
    name?: string;
    tags: string;
    productName?: string;
    slug?: string;
    price: number;
    quantity?: number;
    sale_price?: number;
    image: {
      thumbnail: string;
      [key: string]: unknown;
    };
    sku?: string;
    gallery?: Attachment[];
    category?: Category;
    meta?: any[];
    description?: string;
    variations?: object;
    shortDescription?: string;
    stateProduct?: string;
    state: string;
    brand?: Brand;
    manufacturer?: string;
    discount?: string;
}

type TypeFecth = {
    data: TypeProducts[];
    isLoading: boolean;
    error: {
        error_status: boolean,
        error_message: string,
    },
}

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
/*              ssf: apiParams.ssf,
                sso: apiParams.sso,
                ftr_state: apiParams.ftr_state,
                ftr_ize: ftr_ize, */
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