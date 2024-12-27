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
    setChannelId: (state, action) => {
      state.channelID = action.payload;
    },
    setChannelInfo: (state, action) => {
      state.channelID = action.payload.channelID;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
