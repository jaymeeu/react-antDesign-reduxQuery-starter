import React from 'react'
import "./App.css"
import { AuthProvider } from './contexts/AuthContext'
import { Routing } from './routing'

const App = () => {

  return (
    <>
        <AuthProvider>
          <Routing />
        </AuthProvider>
    </>
  )
}

export default App
