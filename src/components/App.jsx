import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from 'redux/actions';

import { getFilter, getFilteredContacts } from 'redux/selectors';

import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  // const [contacts, setContacts] = useState([...items]);

  // useEffect(() => {
  //   localStorage.setItem('my-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
    const normalizedFind = payload.name.toLowerCase();

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === normalizedFind ||
          contact.number === payload.number
      )
    ) {
      return alert(`This contact is already in your book.`);
    }
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filtered;
  };

  const filteredContacts = filterContacts();

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
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onRemoveContact}
      />
    </div>
  );
};

export default App;
