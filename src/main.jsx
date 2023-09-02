import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import { ThemeProvider } from 'styled-components'
import theme from './pages/styles/theme'
import GlobalStyles from './pages/styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignUp />
    </ThemeProvider>  
  </React.StrictMode>,
)
