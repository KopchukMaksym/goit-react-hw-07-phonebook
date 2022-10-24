import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactSlice';
import { filterContact } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactForm } from './ContactForm';

import ContactList from './ContactList';
import Filter from './Filter';

import s from './FormStyles.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contact => dispatch(addContact(contact))} />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        onFilter={filter => dispatch(filterContact(filter))}
      />
      {!!contacts.length && (
        <ContactList
          contacts={filterItems}
          onDelete={id => dispatch(deleteContact(id))}
        />
      )}
    </div>
  );
};
