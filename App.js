import React, { Component } from 'react';
import Router from './src/routes';
import { Provider } from 'react-redux';

import store from './src/redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;

