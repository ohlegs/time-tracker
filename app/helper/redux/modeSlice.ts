import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ModeState {
    mode:
        | 'cancel'
        | 'save'
        | 'edit'
        | 'pause'
        | 'play'
        | 'lock_close'
        | 'lock_open'
        | '';

}

const initialState: ModeState = {
  mode: 'save',
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ModeState>) => {
      // eslint-disable-next-line
       state.mode = action.payload;
    },

  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
