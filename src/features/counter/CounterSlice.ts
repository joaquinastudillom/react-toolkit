// Ducks pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      console.log('incremented');
      state.value = state.value + 1;
    },
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
