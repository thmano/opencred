import './index.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

const colors = {
  green: {
    900: '#1A8C6F',
  },
  white: {
    100: '#FFFFFF',
  },
  grey: {
    400: '#A0AEC0',
    600: '#4A5568',
  },
};

const fonts = {
  standard: `'Open Sans', sans-serif`,
};
const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
