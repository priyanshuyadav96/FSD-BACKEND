import React from 'react'
import Register from './components/Register'
import Delete from './components/Delete'
import View from './components/View'
import Update from './components/Update'
import './App.css'
const App = () => {
  return (
    <div>
      <h1>User Registrstion System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App
