import React from 'react'
import {useState,useEffect} from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import SignupForm from './SignupForm'
import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
 const [courier,setCourier] = useState(null)
 const [display, setDisplay] = useState(true)
 


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

  if (!courier) return <Login setCourier={setCourier} />

  return (
    <BrowserRouter>
     <Navbar setLogout = {setCourier}/>
      <main className="App">
        <Switch>
          <Route path="/SignupForm">
           <SignupForm setCourier={setCourier} handleDisplay = {handleDisplay}/>
          </Route>
          <Route>
           <Home path='/Home' courier={courier} />
          </Route>
          <Route exact path="/">
           <Login setCourier = {setCourier} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
