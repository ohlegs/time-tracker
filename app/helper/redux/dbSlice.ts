import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface dbState {
  currentTusk:[]
  allTusk:[]
}

const initialState: dbState = {
  currentTusk: [],
  allTusk: [],
};

export const dbSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {

    setCurrnetTusk: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line
      state.value = action.payload;
    },

    setAllTusk: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrnetTusk, setAllTusk } = dbSlice.actions;

export default dbSlice.reducer;
