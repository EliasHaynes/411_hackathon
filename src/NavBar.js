import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Settings from "./Settings"

function NavBar() {
    const [navbar,setNavBar] = useState();

    return (
    <nav className="theNavBar">
        <span>
            <p>Nav Bar</p>
            <img alt="The Hacker News Icon" src={""}></img>
            <h1>Search Hacker News</h1>
            <SearchBar />
            <Settings />
        </span>
    </nav>
    )
}


export default NavBar