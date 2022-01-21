import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

function Navbar({setLogout}) {
const history = useHistory()

 function handlePickup(){
     history.push('/PickupRequests')
    }  
 
 function handleHome(){
  history.push('/Home') 
 }

function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setLogout());
      }
    
return (
 <nav className='nav navbar-expand-sm navbar-light-bg-light'>
  <a href='#'className='navtitle navbar-brand mb-0 h1'>Cycle and Flow
  </a>
  <ul>
   <li className='nav-item active'><Button className='btn btn-lg btn-success border-light btn-block' onClick={handleHome}>Home</Button></li>
   <li className='nav-item active'><Button className='btn btn-lg btn-success border-light btn-block' onClick={handlePickup}>Pickups</Button></li>
   <li className='nav-item active'><Button className='btn btn-lg btn-success border-light btn-block' onClick={handleLogout}>Logout</Button></li>
  </ul>
 </nav>
 )
}


export default Navbar