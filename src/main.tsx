import './index.css';

import { Card, CardHeader, ChakraProvider, extendTheme, Text } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { DashboardFarms } from './pages/DashboardFarms.tsx';
import { DashboardFinancial } from './pages/DashboardFinancial.tsx';

const colors = {
  green: {
    100: '#C6F6D5',
    400: '#48BB78',
    800: '#48BB78',
    900: '#1A8C6F',
  },
  white: {
    100: '#FFFFFF',
  },
  gray: {
    100: '#EDF2F7',
    200: '#E2E8F0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    900: '#171923',
  },
};

const fonts = {
  standard: `'Open Sans', sans-serif`,
};
const theme = extendTheme({ colors, fonts });

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Farms',
    element: <DashboardFarms />,
  },
  {
    path: '/Financial',
    element: <DashboardFinancial />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Card fontFamily="standard" w="100%" h="200px" bg="green.900" px="28px" mb="90px">
        <CardHeader>
          <Text fontSize="12px" color="white.100">
            Home - Central de clientes - Produtor João Ferreira
          </Text>
        </CardHeader>

        <RouterProvider router={router} />
      </Card>
    </ChakraProvider>
  </React.StrictMode>,
);
