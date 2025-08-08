import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterSlices = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
	},
});

export const { increment, decrement } = counterSlices.actions;
export default counterSlices.reducer;
