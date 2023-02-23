import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { addContact, removeContact } from 'redux/contacts/contactsSlice';

import { getFilter, getFilteredContacts } from 'redux/selectors';

import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);

    const normalizedName = payload.name.toLowerCase();

    contacts.find(
      contact =>
        contact.name.toLowerCase() === normalizedName ||
        contact.number === payload.number
    )
      ? alert(`This contact is already in your book.`)
      : dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div
      style={{
        height: '100vh',
        marginLeft: 30,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h1>Contacts</h1>
      <Filter filter={filter} onChange={onSetFilter} />
      <ContactList contacts={contacts} onDeleteContact={onRemoveContact} />
    </div>
  );
};

export default App;
