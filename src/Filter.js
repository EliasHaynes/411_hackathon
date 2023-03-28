import React, {useState} from 'react';


import Dropdown from 'react-bootstrap/Dropdown';


function Filter() {
    const [filter, setFilter] = useState()

  return (
    <div>
        Search
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Stories</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Comments</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        by
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Order
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Date</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Popularity</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        for
        <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Time-frame
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">All time</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Last 24h</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Past Week</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Past Month</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Past Year</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Custom Time</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

    </div>
  );
}

export default Filter;

//Problems:
    //1. I want the dropdown button to display what the user is filtering. So if their wanting to look at only comments the button should say they're on comments.
        //Possible Solution: 
        //1a. Have different states for each of the filtering buttons and update that state to display whatever the user is on.
        //1b. Have the content of the button be a prop.
