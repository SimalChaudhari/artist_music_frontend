import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/project/widgets');
  const data = await response.data;
  console.log('######1111111111111111111111######', data)

  return data;
});

const widgetsSlice = createSlice({
  name: 'projectDashboardApp1/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ projectDashboardApp }) => {
  console.log('projectDashboardApp', projectDashboardApp)
  return projectDashboardApp?.widgets};

export default widgetsSlice.reducer;
