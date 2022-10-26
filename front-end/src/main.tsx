import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { styleGuide } from './styles/styleGuide'
import { App } from './app'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={styleGuide}>
        <GlobalStyle/>
        <App/>
    </ThemeProvider>
  </React.StrictMode>
)
