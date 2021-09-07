import React from 'react';
import { Provider } from 'react-redux';
import { themeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import store from './redux/store';
import Home from  './pages/Home';  
import theme from './theme';



function App() {
  return ( 
    <Provider store={store}>
    <themeProvider theme={theme}>
      <Reset />
    <Home />
    </themeProvider>
    </Provider>
  );
  
}

export default App;
