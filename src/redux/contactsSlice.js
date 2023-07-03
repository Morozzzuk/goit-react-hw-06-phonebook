import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsDefault } from 'data/contactsDefault';

const initialState = {
  items: contactsDefault,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items = [...state.items, action.payload]; //^ Додавання нового контакта
      },
    },
    prepare: (name, number) => {
      //^ Для додавання нового контакту
      return {
        payload: {
          id: nanoid(),
          name: name.trim(),
          number: number.trim(),
        },
      };
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { addContact, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
