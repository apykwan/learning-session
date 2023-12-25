import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type SessionType = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  duration: number;
  image: string;
}

type SessionState = {
  sessions: SessionType[];
}

const initialState: SessionState = {
  sessions: []
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    regSession (
      state, 
      action: PayloadAction<SessionType>
    ) {
      if (state.sessions.findIndex(s => s.id === action.payload.id) === -1) {
        state.sessions = [
          ...state.sessions,
          action.payload
        ];
      }
    },
    cancelSession (
      state,
      action: PayloadAction<string>
    ) {
      const removeSessionIdx: number = state.sessions.findIndex(s => s.id === action.payload);
      if (removeSessionIdx > -1) {
        state.sessions.splice(removeSessionIdx, 1);
      }
    }
  }
});

export const { regSession, cancelSession } = sessionSlice.actions;