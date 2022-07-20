import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface ScannersState {
  scanners: any[],
  errorMessage: string,
  shouldDisplayErrorMessage: boolean
}

// Define the initial state using that type
const initialState: ScannersState = {
  scanners: [],
  errorMessage: "",
  shouldDisplayErrorMessage: false
}

export const scannersSlice = createSlice({
  name: 'scannersReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    resiveScanners: (state, action: PayloadAction<any[]>) => {
      state.scanners = action.payload;
    }
  },
})

export const { resiveScanners } = scannersSlice.actions;



export default scannersSlice.reducer