import React from 'react';
import Home from './src/containers/Home/index';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
