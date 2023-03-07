import { configureStore } from '@reduxjs/toolkit';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

// export const persistor = persistStore(store);

// ________________________________________
// export const store = configureStore({
//   reducer: rootReducer,
// });

// import { createStore } from 'redux';

// import reducer from 'redux/reduser';

// const store = configureStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
/*
const createStore = (reducer, initialState) => {
    const startStore = reducer(initialState);
    return startStore;
}
*/

// export default store;
