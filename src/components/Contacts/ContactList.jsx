import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/contactsSlice';

import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li
          className={css.item}
          key={nanoid()}
          name={contact.name}
          number={contact.number}
        >
          <p className={css.name}>
            {contact.name}: <span>{contact.number}</span>
          </p>
          <button
            className={css.btn}
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
