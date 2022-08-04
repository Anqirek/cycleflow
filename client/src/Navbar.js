import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

function Navbar({setLogout}) {
 const history = useHistory()

 function handlePickup(){
     history.push('/PickupRequests')
    }  
 
 function handleItems(){
  history.push('/Items') 
 }

function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setLogout());
      }
    
return (
<>
  <nav className='navmenu'>
    <ul className= 'nav-buttons'>
      <li><button className='nav-button3' onClick={handleLogout}>Logout</button></li>
      <li><button className='nav-button2' onClick={handlePickup}>Pickups</button></li>
      <li><button className='nav-button1' onClick={handleItems}>Items</button></li>
    </ul>
  </nav>
  <h1 href='#'className='nav-title'>Cycle and Flow</h1>
  
 </>
 )
}


export default Navbar