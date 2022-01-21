import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function SignupForm({setCourier}){

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [address, setAddress] = useState('')

const history = useHistory()

function handleBack(){
    history.push('/')
}

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Signing up...')
        fetch('/SignupForm',{
        method: 'POST',
        headers:{
            'Content-Type': "application/json",
            },
        body: JSON.stringify({
           name,
           email,
           address,
           password,
        }),
        }).then((resp) => {
            if (resp.ok) {
            resp.json().then((courier) => setCourier(courier))
          };
        })
    }

return  (
    <>
      <form onSubmit={handleSubmit} >
        <label>New Courier Signup</label>
        <br></br>
        <label htmlFor='name'>Name:</label>
        <input
        type="text"
        name="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        >
        </input>
        <br></br>
        <label htmlFor='email'>Email:</label>
         <input
         type="text"
         name="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         >
        </input>
        <br></br>

        <label htmlFor='address'>Address:</label>
         <input
         type="text"
         name="address"
         value={address}
         onChange={(e)=>setAddress(e.target.value)}
         >
        </input>
        <label htmlFor='password'>Password:</label>
        <input
         type="password"
         name="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         >
        </input>
    <button type='submit'> Signup! </button>
      </form>
     
      <button onClick={handleBack}>Return</button>
      </>
    )
}

export default SignupForm