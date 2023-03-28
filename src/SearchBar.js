import React, {useState} from 'react';

function SearchBar() {
    const [searchbar,setSearchBar] = useState();

    return (
        <div>
            <p>Search Bar</p>
            <input type='search' placeholder='Search'></input>
        </div>
    )
}

export default SearchBar