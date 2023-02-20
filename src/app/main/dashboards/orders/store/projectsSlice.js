import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProjects = createAsyncThunk(
  'ordersApp/projects/getProjects',
  async () => {
    const response = await axios.get('/api/dashboards/project/projects');
    return response.data;
  }
);

const ordersAdapter = createEntityAdapter({});

export const {
  selectAll: selectProjects,
  selectEntities: selectProjectsEntities,
  selectById: selectProjectById,
} = ordersAdapter.getSelectors((state) => state.ordersApp.projects);

const ordersSlice = createSlice({
  name: 'ordersApp/projects',
  initialState: ordersAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled]: ordersAdapter.setAll,
  },
});

export default ordersSlice.reducer;
