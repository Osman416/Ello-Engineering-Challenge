import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.js';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const theme = createTheme({
    palette: {
      primary: {
        main: '#5ACCCC',
        contrastText: '#FFFFFF', 
      },
      secondary: {
        main: '#4AA088', 
        contrastText: '#FFFFFF', 
      },
      custom: {
        turquoise: '#5ACCCC',
        white: '#FFFFFF',
        steelBlue: '#335C6E',
        yellow: '#FABD33',
        turquoiseLight: '#CFFAFA',
        orangeRed: '#F76434',
        teal: '#4AA088',
        yellowDark: '#FAAD00',
        turquoiseDark1: '#53C2C2',
        orangePastel: '#FFE6DC',
        turquoiseDark2: '#28B8B8',
      },
    },
  });

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
