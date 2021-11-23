import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filter } from 'lodash'
import { RootState } from '../../../store/store'

export const categorySlice = createSlice({
    name: 'add_load_more',
    initialState: 1,
    reducers: {
        addCategoryFilter: (state, action: PayloadAction<number>) => state + action.payload,

        removeCategoryFilter(state){
            return state
        },
        getCategoryLoad(state){
            return state
        }
    }
})

export const { addCategoryFilter, removeCategoryFilter } = categorySlice.actions;

export const selectUser = (state: RootState) => state.userTest;

export default categorySlice.reducer;