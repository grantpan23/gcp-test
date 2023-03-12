import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [token,setToken] = useState('')

  useEffect(() => {
    getToken();
  },[])

  const getToken = async () => {
    const user = {
      username: 'testadmin',
      password: 'password'
  }
  const res = await fetch("https://server-dot-course-outline-manager-379502.nn.r.appspot.com/api/auth/users/login", {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(user)
  })

  const data = await res.json();

  console.log(data);

  setToken(JSON.stringify(data));
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p> {token} </p>
    </div>
  );
}

export default App;
