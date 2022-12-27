import { configureStore } from '@reduxjs/toolkit';
import color_Slice from './colorSlice';
import mode_Slice from './modeSlice';

export const store = configureStore({
  reducer: {
    color: color_Slice,
    mode: mode_Slice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
