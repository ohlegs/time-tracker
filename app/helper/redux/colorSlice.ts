import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface colorState {
  value: string
}

const initialState: colorState = {
  value: '',
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {

    setColor: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line
      state.value = action.payload;
    },

    getColor: state => (state.value),
  },
});

// Action creators are generated for each case reducer function
export const { setColor, getColor } = colorSlice.actions;

export default colorSlice.reducer;
