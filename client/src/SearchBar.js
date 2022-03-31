import React, {useState} from 'react';


function SearchBar({games}) {
    const [filteredData, setFilteredData] = useState([])

    const handleSearch = (e) => {
        const searchWord = e.target.value
        const newFilter = games.filter((g) => {
            return g.name.includes(searchWord);
        });

        if (searchWord === "") {
            setFilteredData([])
        } else {
        setFilteredData(newFilter);
        }
    };

    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" onChange={handleSearch}/>
            </div>
            {filteredData.length != 0 && (
            <div className="dataresult">
                {filteredData.map((g) => {
                    return <div>{g.name}</div>;
                })}
                )
            </div>
            )}
        </div>
    );
}

export default SearchBar;