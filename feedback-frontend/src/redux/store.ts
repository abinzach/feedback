// store.js
import { configureStore } from '@reduxjs/toolkit';
import feedbacksSlice from './feedbacksSlice';

export const  makeStore =()=>{
return  configureStore({
  reducer: {
    feedbacks:feedbacksSlice
    // Add other reducers here if needed
  },
});
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']