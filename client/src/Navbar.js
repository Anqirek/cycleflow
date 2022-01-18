import React from 'react'

function Navbar({setLogout}) {

function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setLogout());
      }
    
return (
<main>
 <button>Home</button>
 <button>Pickup</button>
 <button onClick = {handleLogout}>Logout</button>  
</main>
 )
}


export default Navbar