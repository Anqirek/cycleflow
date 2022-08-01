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
 const [id, setId]=useState(null)

 const itemURL = '/items'
 const itemKey = Object.keys(items).map((key) => {
    return key
  })
 const itemValue = Object.values(items).map((value) => {
    return value
 })
//  const itemEntries = Object.entries(items).map(([key, value]) => {
 
//  return {[key]:value}
//  })
  


    useEffect(()=>{
      fetch(itemURL)
      .then(res => res.json())
      .then((allItems) =>  setItems(allItems))
      
     },[])
     console.log(items)
     useEffect(() => {
      fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((courier) => setCourier(courier));
        }
      });
    }, []);

    console.log(items)

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
           <Login items={items} setItem={setItems} key ={id}/>
          </Route>
          <Route path='/Home'>
           <Home key ={id} courier={courier} items={items} setItem={setItems} search={search} setSearch={setSearch} id={id}  />
          </Route>
          <Route path="/signupform">
           <SignupForm setCourier={setCourier} handleBack={handleBack}/>
          </Route>
          <Route path='/PickupRequests'>
           <PickupRequests />
          </Route>
          <Route path='/EditPickups'>
           <EditPickups key={id} items={items} setItem={setItems} itemKey = {itemKey} itemValue={itemValue} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
   
}

export default App;
