import React from 'react'
import { useState,useEffect } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import SignupForm from './SignupForm'
import { BrowserRouter,Switch,Route,useHistory } from 'react-router-dom'
import PickupRequests from './PickupRequests'
import EditPickups from './EditPickups'
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
 const [items,setItems]=useState([])
 const [search, setSearch]=useState("") 
 const itemURL = '/items'


    useEffect(() => {
      fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((courier) => setCourier(courier));
        }
      });
    }, []);

    useEffect(()=>{
      fetch(itemURL)
      .then(res => res.json())
      .then((allItems) => setItems(allItems))
      
     },[])

    const handleBack =()=>{
      previous.push('/')
    }
  
     function handleClick(){
      setSignUp((currentSide) => !currentSide)
     }  

  if (!courier) return signUp ? <Login setCourier={setCourier} handleClick={handleClick} setError={setError}/> : <SignupForm setCourier={setCourier} handleBack={handleBack}/>

  return (
    <BrowserRouter>
     <Navbar setLogout = {setCourier}/>
      <main className="App">
        <Switch>
          <Route path='/Home'>
           <Home courier={courier} items={items} setItems={setItems} search={search} setSearch={setSearch} />
          </Route>
          <Route path="/SignupForm">
           <SignupForm setCourier={setCourier} handleBack={handleBack}/>
          </Route>
          <Route path='/PickupRequests'>
           <PickupRequests />
          </Route>
          <Route path='/EditPickups'>
           <EditPickups item={items} setItem={setItems}/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
