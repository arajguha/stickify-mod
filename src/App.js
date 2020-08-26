import React from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { notesReducer } from './store/notesReducer'

const store = createStore(notesReducer)
//console.log(store.getState())

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
