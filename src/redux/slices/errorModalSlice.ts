import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ErrorModalState {
    showModal: boolean;
    message: string;
}

const initialState: ErrorModalState = {
    showModal: false,
    message: ''
}

export const errorModalSlice = createSlice({
    name: 'errorModalReducer',
    initialState,
    reducers: {

        openModal: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.showModal = true;
        },
        closeModal: (state) => {           
            state.message='';
            state.showModal = false;
        }
    },
})

export const { openModal, closeModal } = errorModalSlice.actions;

export default errorModalSlice.reducer
