import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
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
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
