
function Search({search,setSearch}){
 
 function handleSearch(e){
  setSearch(e.target.value)
 }

  return (
   <div className='searchbar'>
    <label htmlFor= "search"> Search for Customers: </label>
    <input
     type="text"
     id="search"
     value={search}
     placeholder="Search customer here..."
     onChange={handleSearch}
    />
   </div>
 )
}


export default Search