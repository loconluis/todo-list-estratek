import React from 'react';
import ReactDOM from 'react-dom';
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rooReducer from './reducers';
import { startSetTodos } from './actions';
import thunk from 'redux-thunk'

const store = createStore(rooReducer, applyMiddleware(thunk));
store.dispatch(startSetTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
