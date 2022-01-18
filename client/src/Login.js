import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Login({setCourier}) {
  
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const history = useHistory()

  function handleClick() {
    history.push('/SignupForm')
  } 

  function handleLogin(e) {
    e.preventDefault()

    fetch("/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((courier) => setCourier(courier))
          };
        })
    }

  return (
    <>
      <form onSubmit={handleLogin}>
      <label htmlFor="Email">Email:</label>
      <input
      type="text"
      id="username"
      name='username'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
      type="password"
      id="password"
      name= 'password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      </form>
      <button type='submit' onClick={handleClick}>Signup</button>
    </>

  )
      
}

export default Login