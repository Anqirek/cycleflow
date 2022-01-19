function PickupCard({bottle,size,count,location,customer}){

return ( 
 <li className="card">
  <h4>Bottle:{bottle}</h4>
  <p>Size: {size}</p>
  <p>Count:{count}</p>
  <p>Location: {location}</p>
  <>Customer: {customer} </>
   <button>Pickup Bottles</button>
 </li>
 )
}

export default PickupCard