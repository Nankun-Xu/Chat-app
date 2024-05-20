import { useState, useEffect } from 'react'
import { fetchSession } from './services';

import './App.css'

import LoginForm from './LoginForm';
import Chat from './Chat';

function App() {
  const [loggedin, setLoggedin] = useState('');

  function checkSession() {
    fetchSession()
      .then(() => {
        setLoggedin(true)
      })
      .catch(err => {
        setLoggedin(false);
      });
  }

  useEffect(
    () => {
      checkSession();
    },
    []
  );

  return (
    <div className="app">
      {loggedin && <Chat setLoggedin={setLoggedin} />}
      {!loggedin && <LoginForm setLoggedin={setLoggedin} />}
    </div>
  );
}

export default App
