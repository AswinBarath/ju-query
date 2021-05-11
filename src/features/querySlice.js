import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    queryId: null,
    queryName: null
  },
  reducers: {
    setQueryInfo: (state, action) => {
        state.queryId = action.payload.queryId;
        state.queryName = action.payload.queryName;
    },
  },
});

export const { setQueryInfo } = querySlice.actions;

export const selectQueryId = (state) => state.query.queryId;

export const selectQueryName = (state) => state.query.queryName;

export default querySlice.reducer;
