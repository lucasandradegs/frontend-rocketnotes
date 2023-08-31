import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import theme from './pages/styles/theme'
import GlobalStyles from './pages/styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>  
  </React.StrictMode>,
)
