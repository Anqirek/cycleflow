import {Button,CardGroup,Card} from 'react-bootstrap'

function PickupCard({bottle,size,count,location,customer}){

return ( 

 <div className="PickupCard" style={{}}>
  <CardGroup>
   <Card className="text-center" style ={{color: '#000', width:'30rem'}}>
    <Card.Img variant='top'className="rounded sm-auto d-block" src='https://media4.giphy.com/media/Vzq3HO2Cid0CHSW2h6/giphy.gif?cid=ecf05e47zhg3xk0tw7vic0kqifjw5yhtqn01gvi5zvq55a1m&rid=giphy.gif&ct=g'/>
    <Card.Body>
    <Card.Title className='text-center'>
     Customer:{customer}
    </Card.Title> 
    <Card.Text className='text-center'>
     Bottle:{bottle}
      <br></br>
     Size: {size}
      <br></br>
     Count: {count}
      <br></br>
     Location: {location}
    </Card.Text> 
    <Button variant = 'primary'>Pickup Bottles</Button>
   </Card.Body>
  </Card>
 </CardGroup>
</div>
 
 )
}

export default PickupCard