import './App.css'
import Login from './components/Login'
import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main>
      <Login username={username} password={password} setUsername = {setUsername} setPassword = {setPassword} />
    </main>
  )
}
