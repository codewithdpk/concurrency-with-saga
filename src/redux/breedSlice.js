import { createSlice } from '@reduxjs/toolkit';

const breedSlice = createSlice({
  name: 'breeds',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    breedsFetchStarted: (state) => {
      state.status = 'loading';
    },
    breedsFetchSuccess: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    breedsFetchFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { breedsFetchStarted, breedsFetchSuccess, breedsFetchFailed } = breedSlice.actions;

export default breedSlice.reducer;