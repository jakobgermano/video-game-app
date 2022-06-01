import React, {useState, useEffect} from 'react';
    
    function SearchBar({games}) {
        const [searchInput, setSearchInput] = useState("")
        const [submittedSearch, setSubmittedSearch] = useState("")

        const handleSearch = (e) => {
            e.preventDefault()
            setSubmittedSearch(searchInput)
        }
        
        const filteredData = games?.filter(game => game.name.toLowerCase().includes(submittedSearch.toLowerCase())).map(g => {
            if (submittedSearch.length > 0){return <div key={g.id}>{g.name}</div>}
            }
        )

        return(
            <div className="search">
                <form >
                    <button onClick={handleSearch}>Submit</button>
                <div className="searchInputs">
                    <input type="text" placeholder="search..." value={searchInput} onChange={e=>setSearchInput(e.target.value)}/>
                </div>
                </form>
                {filteredData}
            </div>
        );
    }
    export default SearchBar;