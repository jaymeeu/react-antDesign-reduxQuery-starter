import React from 'react'
import ThemeProvider from './contexts/ThemeContext'
import "./App.css"
import { AuthProvider } from './contexts/AuthContext'
import { Routing } from './routing'
import './i18n'

const App = () => {

  return (
    <>
      <ThemeProvider >
        <AuthProvider>
          <Routing />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
