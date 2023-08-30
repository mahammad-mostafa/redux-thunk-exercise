import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const states = {
  list: [],
  loading: false,
  error: undefined,
};

export const fetcher = createAsyncThunk('users/fetch', async (_, { rejectWithValue }) => {
  try {
    return fetch('https://randomuser.me/api/?results=10').then((response) => response.json());
  } catch (error) {
    return rejectWithValue(error);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: states,
  extraReducers: (builder) => {
    builder.addCase(fetcher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetcher.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
      state.list = action.payload.results;
    });
    builder.addCase(fetcher.rejected, (state, action) => {
      if (action.error.name !== 'AbortError') {
        state.loading = false;
        state.error = action.error.name;
      }
    });
  },
});

export default usersSlice.reducer;
