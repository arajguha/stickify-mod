import React from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer  from './store/rootReducer'

const store = createStore(rootReducer)

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
