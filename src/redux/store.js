// import { createStore } from 'redux';
// import { reducer } from './reducer';

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlice';

import filterReducer from './filter/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
