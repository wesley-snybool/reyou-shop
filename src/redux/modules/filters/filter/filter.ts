import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { FilterTypes } from 'src/types/types'

const defaultFilters: FilterTypes = {
    pc: 1,
    pps: 10,
    ftr_universe: [],
    ftr_state: [],
}

export const filterSlice = createSlice({
    name: 'add_load_more',
    initialState: defaultFilters,
    reducers: {
        addFilterUniverse: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return {...state, ftr_universe: payload}
        },
        addFilterStateProduct: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return {...state, ftr_state: payload}
        },
        removeFilter(state){
            return {...state, state: defaultFilters}
        },
        removeAllfilters (state){
            return state
        }
    }
})

export const { addFilterStateProduct, addFilterUniverse, removeFilter } = filterSlice.actions;

export const selectUser = (state: RootState) => state.userTest;

export default filterSlice.reducer;