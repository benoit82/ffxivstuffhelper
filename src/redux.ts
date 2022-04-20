import { configureStore, createSlice } from '@reduxjs/toolkit';

export type UserState = {
  favLng: 'en' | 'fr';
};

const initialState: UserState = {
  favLng: 'en',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserLang: (state, { payload }) => ({... state, favLng: payload}),
  },
});

export const { updateUserLang } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
