import PickupCard from './PickupCard'

function PickupList({allItems}){
    const renderItems = allItems.map((item)=> {
     return <PickupCard
     key = {item.id}
     bottle = {item.bottle}
     size = {item.size}
     count = {item.count}
     location = {item.location}
     customer = {item.customer_id}
     />
 })
    return (
        <>{renderItems}</>
    )
}

export default PickupList