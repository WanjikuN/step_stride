export default function Filter({handleName,handleGender, selectedGender}){
    return(
        <div id="filter">
            {/* filter based on names */}
           <input className="filter"  type="text" name="search" onChange={handleName} placeholder="Search names ..."/>
            <div>
                {/* sort based on gender */}
                <select className="filter" id="sortGender" onChange={handleGender} value={selectedGender}>
                    <option className="filter" value="All">Gender</option>
                    <option className="filter" value="men">Men</option>
                    <option className="filter"  value="women">Women</option>
                    <option className="filter" value="kids">Kids</option>
                </select>
                {/* sort based on brand */}
            </div>
        </div>
    )
}