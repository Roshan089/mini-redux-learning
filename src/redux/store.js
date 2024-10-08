import { createStore } from 'redux';
import rootReducer from './reducer'; // Combine all your reducers

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for Redux DevTools
);

export default store;
