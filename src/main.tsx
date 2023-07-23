import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

const colors = {
  brand: {
    900: '#0A5C78',
    800: '#B3A001',
    700: '#21978C',
    600: '#EAEFF3',
    500: '#055958',
  }
}

const theme = extendTheme({colors});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename='/digital-port'>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
