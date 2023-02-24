import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

const App = () => {
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
      <Form />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
