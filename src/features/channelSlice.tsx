import { createSlice } from '@reduxjs/toolkit';
import { InitialChannelState } from '../types';

const initialState: InitialChannelState = {
  channelID: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelID = action.payload.channelID;
      state.channelName = action.payload.channelName;
    },
  },
});

export default channelSlice.reducer;
export const { setChannelInfo } = channelSlice.actions;
