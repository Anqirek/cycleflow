import React, {useState} from 'react'

function Login({setCourier,handleClick}) {
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 

  function handleLogin(e) {
    e.preventDefault()

    fetch("/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((courier) => setCourier(courier))
          };
        })
    }


  return (
   
    <div className='text-center mt-6'>
      <header className='headerloginform'>
        <h1>Cycle & Flow</h1>
        </header>
      <form className='loginform' onSubmit={handleLogin}>
        <header className='signinform'>Please Sign in</header>
      <label htmlFor="Email"></label>
      <input
        type="email"
        id="emailAddress"
        name='email'
        value={email}
        className='form-control'
        placeholder='Email Address'
        required
        autoFocus
        onChange={(e)=>setEmail(e.target.value)}
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name= 'password'
        value={password}
        className='form-control'
        placeholder='Password'
        required
        autoFocus
        onChange={(e)=>setPassword(e.target.value)}
      />
    <div className='checkbox'>
     <label>
      <input type='checkbox'
       value='remember-me'/> Remember me
     </label>
    </div>
      <button style={{width: 450}} className= 'btn btn-lg btn-success border-light btn-block' type="submit">Login</button>
      </form>
      <button style={{width: 450}} className='btn btn-lg btn-success border-light btn-block' type='submit' onClick={handleClick}>Signup</button>
    </div>

  )
      
}

export default Login