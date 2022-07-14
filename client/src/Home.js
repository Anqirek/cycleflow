import PickupList from './PickupList'
import Search from './Search'

 

function Home({search,setSearch, items}) {
const oneCustomer=items.map((item)=>item.customer)
const filteredItems = items.filter((item)=> item.bottle.toLowerCase().includes(search.toLowerCase()
 ))
console.log(items)
    return (
     <main>
      <Search search={search} setSearch={setSearch}/>
      <PickupList allItems={filteredItems} />
     </main>
    )
}

export default Home