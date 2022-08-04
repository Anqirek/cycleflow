import React from 'react'
import { useState,useEffect } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import SignupForm from './SignupForm'
import { BrowserRouter,Switch,Route,useHistory } from 'react-router-dom'
import PickupRequests from './PickupRequests'
import Items from './Items'
import Item from './Item'
import { GoogleMap,
useLoadScript,
Marker,
InfoWindow,}
from "@react-google-maps/api";
// import {formatRelative} from "date-fns";


function App() {
 const [courier,setCourier]=useState(null)
 const [signUp, setSignUp]=useState(true)
 const [error, setError]=useState('')
 const previous=useHistory()
 

     useEffect(() => {
      fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((courier) => setCourier(courier));
        }
      });
    }, []);


    const handleBack =()=>{
      previous.push('/')
    }
  
     function handleClick(){
      setSignUp((currentSide) => !currentSide)
     } 

     

  if (!courier) return signUp ? <Login setCourier={setCourier} handleClick={handleClick}/> : <SignupForm setCourier={setCourier} handleBack={handleBack}/>
    return (
  
    <BrowserRouter>
     <Navbar setLogout = {setCourier}/>
      <main className="App">
        <Switch>
        <Route exact path='/'>
           <Login courier={courier} setCourier={setCourier}/>
          </Route>
          <Route path="/signupform">
           <SignupForm setCourier={setCourier} handleBack={handleBack}/>
          </Route>
          <Route path='/PickupRequests'>
           <PickupRequests />
          </Route>
          <Route path = '/Item'>
           <Item />
          </Route>
          <Route path='/Items'>
           <Items />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
   
}

export default App;
