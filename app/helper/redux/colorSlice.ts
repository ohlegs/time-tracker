import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface colorState {
  color: string
}

const initialState: colorState = {
  color: '',
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {

    setColor: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line
      state.color = action.payload;
    },

  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
