import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import { ContactsList } from 'components/ContactsList/ContactsList';
// import { Form } from 'components/Form/Form';
// import { Filter } from 'components/Filter/Filter';
import { Navigation } from 'components/Navigation/Navigation';
import { Phonebook } from 'components/Phonebook/Phonebook';

// import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

// import { useDispatch } from 'react-redux';

// import { fetchAllContacts } from 'redux/contacts/contacts-operations';

// import css from './App.module.css';
import store from 'redux/store';

export const App = () => {
  // const filteredContacts = useSelector(getFilteredContacts);

  // const isContacts = Boolean(filteredContacts.length);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllContacts());
  // }, [dispatch]);

  return (
    <Provider
      store={store}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: `column`,
        marginLeft: 40,
        marginRight: 40,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <BrowserRouter>
        <Navigation />
        <Phonebook />
        {/* <div
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
        </div> */}
      </BrowserRouter>
    </Provider>
  );
};

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     flexDirection: `column`,
//     marginLeft: 40,
//     fontSize: 20,
//     color: '#010101',
//   }}
// >
//   <h1 className={css.title}>Phonebook</h1>
//   <Form />
//   <h2 className={css.title}>Contacts</h2>
//   <Filter />
//   {isContacts && <ContactsList />}
//   {!isContacts && <p>No such contacts in Phonebook</p>}
// </div>

//  <Suspense>
//    <Routes>
//      <Route path="/" element={<HomePage />} />
//      <Route path="/movies" element={<MoviesPage />} />
//      <Route path="/movies/:movieId" element={<MovieDetails />}>
//        <Route path="cast" element={<MovieCast />} />
//        <Route path="reviews" element={<MovieReviews />} />
//      </Route>
//      <Route path="*" element={<NotFoundPage />} />
//    </Routes>
//  </Suspense>;

// ________________________________________________________________
// import { getFilter } from '../../redux/filter/filter-selectors';
// addContact,
// import { deleteContact } from '../../redux/contacts/contacts-slice';
// import { setFilter } from '../../redux/filter/filter-slice';

//  getAllContacts,

// const allContacts = useSelector(getAllContacts);
// const filter = useSelector(getFilter);

// const dispatch = useDispatch();

// const isDublicate = name => {
//   const normalizedName = name.toLowerCase();

//   const result = allContacts.find(({ name }) => {
//     return name.toLowerCase() === normalizedName;
//   });

//   return Boolean(result);
// };

// const handleAddContact = ({ name, number }) => {
//   console.log({ name, number });
//   if (isDublicate(name)) {
//     alert(`${name} is alredy in contacts!`);
//     return false;
//   }
//   dispatch(addContact({ name, number }));
// };

// const handleDelete = id => {
//   dispatch(deleteContact(id));
// };

// const handleFilter = ({ target }) => {
//   dispatch(setFilter(target.value));
// };
// ___________________________________________________________
// handleFilter = { handleFilter };
//  handleDelete = { handleDelete };
// items = { filteredContacts };
// __________________________________________________________
// onSubmit = { handleAddContact };
// ____________________________________________________________
//  value = { filter };

// _______________________________________________________________
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };
