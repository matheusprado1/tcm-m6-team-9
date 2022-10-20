import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { styleGuide } from './styles/theme'
import App from './app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={styleGuide}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
