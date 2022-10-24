import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/thunk.contacts';
import { ContactForm } from './ContactForm';

import ContactList from './ContactList';
import Filter from './Filter';

import s from './FormStyles.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contact => dispatch(addContactsThunk(contact))} />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onFilter={filter => dispatch(filterContact(filter))}
      />
      {!!contacts.length && (
        <ContactList
          contacts={filterItems}
          onDelete={id => dispatch(deleteContactsThunk(id))}
        />
      )}
    </div>
  );
};
