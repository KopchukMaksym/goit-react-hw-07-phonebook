import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const persistedContactReducer = persistReducer(
  persistConfig,
  rootReduser
);
