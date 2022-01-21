import React from 'react'
import { useState,useEffect } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import SignupForm from './SignupForm'
import { BrowserRouter,Switch,Route,useHistory } from 'react-router-dom'


function App() {
 const [courier,setCourier] = useState(null)
 const [display, setDisplay] = useState(true)
 const history = useHistory()


    useEffect(() => {
      fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((courier) => setCourier(courier));
        }
      });
    }, []);

    function handleDisplay() {
      setDisplay((current) => !current)
      }

     function handleClick(){
      history.push('/SignupForm')
     }  

  if (!courier) return  <Login setCourier = {setCourier} handleClick={handleClick} />

  return (
    <BrowserRouter>
     <Navbar setLogout = {setCourier}/>
      <main className="App">
        <Switch>
          <Route exact path="/SignupForm">
           <SignupForm setCourier={setCourier} handleDisplay = {handleDisplay}/>
          </Route>
          <Route>
           <Home exact path='/Home' courier={courier} />
          </Route>
          <Route exact path="/">
           <Login setCourier = {setCourier} handleClick={handleClick} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
