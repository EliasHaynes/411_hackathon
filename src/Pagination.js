import React, {useState} from 'react';

function Pagination(props) {
    const [pagination,setPagination] = useState();
    
    return (
        <span>
            <p>Pagination</p>
            <button>1{props.pageNum}</button>
            <button>2{props.pageNum}</button>
            <button>3{props.pageNum}</button>
            <button>4{props.pageNum}</button>
            <button>5{props.pageNum}</button>
            <button>6{props.pageNum}</button>
            <button>Next</button>
        </span>
    )
}

export default Pagination


//Problems:
    //1. I need to have the buttons display the pages index.
    //2. I need the next button to skip to display the next 6 pages
