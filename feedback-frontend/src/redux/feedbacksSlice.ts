// feedbacksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Feedback } from '../types/types';

interface FeedbacksState {
  feedbacks: Feedback[];
}

const initialState: FeedbacksState = {
  feedbacks: [],
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    setFeedbacks(state, action: PayloadAction<Feedback[]>) {
      state.feedbacks = action.payload;
    },
    addFeedback(state, action: PayloadAction<Feedback>) {
      state.feedbacks.push(action.payload);
    },
    addFeedbacks(state, action: PayloadAction<Feedback[]>) {
      state.feedbacks = [...state.feedbacks, ...action.payload];
    },
  },
});

export const { setFeedbacks, addFeedback,addFeedbacks} = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
