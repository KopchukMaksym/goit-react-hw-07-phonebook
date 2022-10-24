import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const isExist = state.filter(el => action.payload.name === el.name);
      if (!!isExist.length) {
        alert(`${action.payload.name} is already in contacts`);
      } else {
        state.push(action.payload);
      }
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { deleteContact, addContact } = contactsSlice.actions;
