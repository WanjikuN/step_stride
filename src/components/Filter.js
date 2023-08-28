export default function Filter({handleName}){
    return(
        <div id="filter">
           <input className="filter"  type="text" name="search" onChange={handleName} placeholder="Search names ..."/>

        </div>
    )
}