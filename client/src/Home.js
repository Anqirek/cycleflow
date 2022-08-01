import PickupList from './PickupList'
import Search from './Search'

 

function Home({search,setSearch, items,id,setItem}) {
 const filteredItems = Object.entries(items).map(([key, value]) => {
     

 return {[key]:value}
 })
 

    return (
     <main>
      <Search search={search} setSearch={setSearch}/>
      <PickupList allItems ={filteredItems} key={id} />
     </main>
    )
}

export default Home