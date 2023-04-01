import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SearchBar from './SearchBar';

function Filter(props) {
    const [searchBy,setSearchBy] = useState("story")
    const [orderBy,setOrderBy] = useState('byPopularity')
    const [from,setFrom] = useState('last24h')

    const handleSelectSearch =(e) => {
        console.log(e)
        setSearchBy(e)
    }

    const handleSelectOrder =(e) => {
        console.log(e)
        setOrderBy(e)
    }

    const handleSelectFrom =(e) => {
        console.log(e)
        setFrom(e)
    }

  return (
    <div>
        <SearchBar 
        orderBy={orderBy}
        from={from}
        searchBy={searchBy}
        />

        Search by:
        <DropdownButton data={searchBy} id="dropdown-basic-button" title={searchBy} onSelect={handleSelectSearch}>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
            <Dropdown.Item eventKey="story">Stories</Dropdown.Item>
            <Dropdown.Item eventKey="comment">Comments</Dropdown.Item>
        </DropdownButton>

        Order:
        <DropdownButton data={orderBy} id="dropdown-basic-button" title={orderBy} onSelect={handleSelectOrder}>
            <Dropdown.Item eventKey="byPopularity">Popularity</Dropdown.Item>
            <Dropdown.Item eventKey="byDate">Date</Dropdown.Item>

        </DropdownButton>

        From:
        <DropdownButton data={from} id="dropdown-basic-button" title={from} onSelect={handleSelectFrom}>
            <Dropdown.Item eventKey="all">All time</Dropdown.Item>
            <Dropdown.Item eventKey="last24h">Last 24h</Dropdown.Item>
            <Dropdown.Item eventKey="pastWeek">Past Week</Dropdown.Item>
            <Dropdown.Item eventKey="pastMonth">Past Month</Dropdown.Item>
            <Dropdown.Item eventKey="pastYear">Past Year</Dropdown.Item>
        </DropdownButton>
    </div>
  );
}

export default Filter;



//tags:
    //For story,comment,or polls
    //For Author: author_
    //

//numericFilters:
    //created_at_i: <=
    //