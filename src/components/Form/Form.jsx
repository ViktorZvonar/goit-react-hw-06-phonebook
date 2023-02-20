// import { Component } from 'react';
import { useState } from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ onSubmit }) => {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ ...initialState });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameInputId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          id={nameInputId}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label} htmlFor={nameInputId}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number}
          id={phoneInputId}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   phoneInputId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset() {
//     this.setState({ name: '', number: '' });
//   }

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css.label} htmlFor={this.nameInputId}>
//           Name
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={this.state.name}
//             id={this.nameInputId}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <label className={css.label} htmlFor={this.nameInputId}>
//           Number
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.number}
//             id={this.phoneInputId}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
