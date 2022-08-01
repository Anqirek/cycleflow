import PickupCard from './PickupCard'

function PickupList({allItems, id}){
    const renderItems = allItems.map((item)=> {
     return <PickupCard
      key = {id}
      bottle = {item.bottle}
      size = {item.size}
      count = {item.count}
      location = {item.location}
      customer = {item.customer_id}
     />
 })

    return (
        <ul>{renderItems}</ul>
    )
}

export default PickupList