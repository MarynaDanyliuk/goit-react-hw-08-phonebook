import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';

import inititalState from 'components/Form/initialState';

import { getAllContacts } from 'redux/contacts/contacts-selectors';

import { fetchAddContact } from 'redux/contacts/contacts-operations';

export const Form = () => {
  const [state, setState] = useState({ ...inititalState });
  const allContacts = useSelector(getAllContacts);
  console.log(allContacts);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setState({ ...inititalState });
    console.log({ name, number });
    if (isDublicate(name)) {
      alert(`${name} is alredy in contacts!`);
      setState({ name, number });
      return false;
    }

    dispatch(fetchAddContact({ name, number }));

    // reset();
  };

  // const reset = () => {
  //   setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const { name, number } = state;

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form_label}>
          Name
          <input
            className={css.form_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form_label}>
          Number
          <input
            className={css.form_input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
};

// __________________________________
// import PropTypes from 'prop-types';
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
