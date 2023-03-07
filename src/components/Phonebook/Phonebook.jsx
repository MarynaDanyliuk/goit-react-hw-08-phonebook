import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

import { useDispatch } from 'react-redux';

import { fetchAllContacts } from 'redux/contacts/contacts-operations';
import css from './Phonebook.module.css';

export const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const isContacts = Boolean(filteredContacts.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: `column`,
        marginLeft: 40,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isContacts && <ContactsList />}
      {!isContacts && <p>No such contacts in Phonebook</p>}
    </div>
  );
};
