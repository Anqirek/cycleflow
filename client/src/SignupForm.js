import React, {useState} from 'react'

function SignupForm({setCourier, handleBack}){

const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const [address, setAddress]=useState('')
// const [current, setCurrent]=useState(true)
  

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
    <div className='text-center mt-6'>
      <form onSubmit={handleSubmit} className='signupform' >
        <label className='signuptitle'>New Courier Signup</label>
        <br></br>
        <label htmlFor='name'></label>
        <input
        type="text"
        name="name"
        value={name}
        placeholder='Name'
        onChange={(e)=>setName(e.target.value)}
        >
        </input>
        <br></br>
        <label htmlFor='email'></label>
         <input
         type="text"
         name="email"
         value={email}
         placeholder='Email'
         onChange={(e)=>setEmail(e.target.value)}
         >
        </input>
        <br></br>

        <label htmlFor='address'></label>
         <input
         type="text"
         name="address"
         value={address}
         placeholder='Address'
         onChange={(e)=>setAddress(e.target.value)}
         >
        </input>

        <br></br>

        <label htmlFor='password'></label>
        <input
         type="password"
         name="password"
         value={password}
         placeholder='Password'
         onChange={(e)=>setPassword(e.target.value)}
         >
        </input>
      <button className='btn btn-lg btn-success border-light btn-block' type='submit'> Signup! </button>
     </form>
     <button className='rtn-btn btn-lg btn-success border-light btn-block' type='submit' onClick={handleBack}>Return</button>
    </div>
      </>
    )
}

export default SignupForm