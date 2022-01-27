import {Button,CardGroup,Card} from 'react-bootstrap'

import { useHistory } from 'react-router-dom'

function PickupCard({bottle,size,count,location,oneCustomer}){
 const history = useHistory()

 function handlePick() {
  history.push('/PickupRequests') 
  }

  function handleEdit() {
   history.push('/EditPickups')
  }

return ( 

 <div className="PickupCard" style={{}}>
  <CardGroup>
   <Card className="text-center" style ={{color: '#000', width:'20rem'}}>
    <Card.Img id='card-img' variant='top'className="rounded sm-auto d-block" src='https://media4.giphy.com/media/Vzq3HO2Cid0CHSW2h6/giphy.gif?cid=ecf05e47zhg3xk0tw7vic0kqifjw5yhtqn01gvi5zvq55a1m&rid=giphy.gif&ct=g'/>
    <Card.Body>
    <Card.Title className='text-center'>
     Customer: {oneCustomer}
    </Card.Title> 
    <Card.Text className='text-center'>
     Bottle: {bottle}
      <br></br>
     Size: {size}
      <br></br>
     Count: {count}
      <br></br>
     Location: {location}
    </Card.Text> 
    <Button onClick={handlePick} type='submit'className='btn btn-lg btn-success border-light btn-block'>Pickup Bottles</Button>
    <Button onClick={handleEdit} type='submit'className='btn btn-lg btn-success border-light btn-block'>Edit</Button>
   </Card.Body>
  </Card>
 </CardGroup>
</div>
 
 )
}

export default PickupCard