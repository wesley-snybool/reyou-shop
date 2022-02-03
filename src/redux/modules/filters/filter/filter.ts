import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { FilterTypes } from 'src/types/types'

type PriceTypes = {
    ftr_priceMin?: number;
    ftr_priceMax?: number;
}

const defaultFilters: FilterTypes = {
    pc: 1,
    pps: 10,
    ftr_universe: [],
    ftr_state: [],
    ftr_category: [],
    ftr_typeItem: [],
    ftr_brand: '',
    ftr_material: '',
    ftr_priceMin: 0,
    ftr_priceMax: 2000,
}

export const filterSlice = createSlice({
    name: 'add_load_more',
    initialState: defaultFilters,
    reducers: {
        addFilterUniverse: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return { ...state, ftr_universe: payload }
        },
        addFilterStateProduct: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return { ...state, ftr_state: payload }
        },
        addFilterCategoryProduct: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return { ...state, ftr_category: payload }
        },
        addFilterTypeItem: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return { ...state, ftr_typeItem: payload }
        },
        removeItemFilterMyUniverse: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return { ...state, ftr_universe: payload }
        },
        addFilterBrand: (state: FilterTypes, { payload }: PayloadAction<string>) => {
            return { ...state, ftr_brand: payload }
        },
        addFilterMaterial: (state: FilterTypes, { payload }: PayloadAction<string>) => {
            return { ...state, ftr_material: payload }
        },
        addFilterPrice: (state: FilterTypes, { payload }: PayloadAction<PriceTypes>) => {
            return { ...state, ftr_priceMax: payload.ftr_priceMax, ftr_priceMin: payload.ftr_priceMin }
        },
        removeAllfilters(state) {
            return defaultFilters;
        },
    }
})

export const {
    addFilterStateProduct,
    addFilterUniverse,
    addFilterCategoryProduct,
    addFilterTypeItem,
    addFilterBrand,
    removeItemFilterMyUniverse,
    addFilterMaterial,
    addFilterPrice,
    removeAllfilters,
} = filterSlice.actions;

export const selectUser = (state: RootState) => state.userTest;

export default filterSlice.reducer;