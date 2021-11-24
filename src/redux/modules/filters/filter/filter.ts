import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'
import { FilterTypes } from 'src/types/types'

const defaultFilters: FilterTypes = {
    pc: 1,
    pps: 10,
    ftr_typeItem: [],
}

export const filterSlice = createSlice({
    name: 'add_load_more',
    initialState: defaultFilters,
    reducers: {
        addFilter: (state: FilterTypes, { payload }: PayloadAction<string[]>) => {
            return {...state, ftr_typeItem: payload}
        },

        removeFilter(){
            return defaultFilters
        },
        gremoveAllfilters (state){
            return state
        }
    }
})

export const { addFilter, removeFilter } = filterSlice.actions;

export const selectUser = (state: RootState) => state.userTest;

export default filterSlice.reducer;