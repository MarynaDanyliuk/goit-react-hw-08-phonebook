import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export default rootReducer;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blackList: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;

// _________________________________
// version: 1,
