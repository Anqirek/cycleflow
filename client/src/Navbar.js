import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar({setLogout}) {

function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setLogout());
      }
    
return (
 <nav className='navbar navbar-expand-sm navbar-light-bg-light'>
  <a href='#'className='navbar-brand mb-0 h1'>Cycle and Flow
  </a>
  <ul>
   <li className='nav-item active'><Button>Home</Button></li>
   <li className='nav-item active'><Button>Pickup</Button></li>
   <li className='nav-item active'><Button onClick = {handleLogout}>Logout</Button></li>
  </ul>
 </nav>
 )
}


export default Navbar