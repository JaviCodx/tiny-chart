import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel, Box, Progress } from '@radix-ui/themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <App />
      <Box maxWidth="300px">
        <Progress />
      </Box>
      <ThemePanel />
    </Theme>
  </React.StrictMode>,
)
