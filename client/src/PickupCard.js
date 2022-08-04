import React from 'react'
import { useHistory } from 'react-router-dom'

function PickupCard({username,bottle,size,count,location}){
 const history = useHistory()

 function handlePick() {
  history.push('/PickupRequests') 
  }


return ( 

 <main className="PickupCard" >
   <div>
    <img id='card-img' variant='top'className="rounded sm-auto d-block" src='https://media4.giphy.com/media/Vzq3HO2Cid0CHSW2h6/giphy.gif?cid=ecf05e47zhg3xk0tw7vic0kqifjw5yhtqn01gvi5zvq55a1m&rid=giphy.gif&ct=g'/>
   
   <li>
    <ul>
        Customer: {username}
        <br></br>
        Bottle: {bottle}
          <br></br>
        Size: {size}
          <br></br>
        Count: {count}
          <br></br>
        Location: {location}
      </ul>
     </li> 
   
    <button onClick={handlePick} type='submit'className='btn btn-lg btn-success border-light btn-block'>Pickup Bottles</button>
  </div>
 
</main>
 
 )
}

export default PickupCard