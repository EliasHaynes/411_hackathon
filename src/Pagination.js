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
    //2. I need the next button to skip to display the next 6 pages.


//Button Related
// const numOfButtonsAtOnce = 6 && "The next and prev button make it 8"
// const currentPage = "This will be frequently updated with the page the user is currently on"
// const prevPage = currentPage -6
// const nextPage = currentPage +6

// //Page Related / Global Variables
// const sumOfContent = 'Will have to get this value from the api, maybe a .length can be used looking at the data?'
// const limitOfContentOnAPage = 8; //Number of Articles/Comments that will display on a page.
// const numOfPagesGenerated = sumOfContent/limitOfContentOnAPage


// //Steps:
//     //1. Define Global Variables. (check)
//     //2. Add Page Numbers
//     //3. Display Active Page
//     //4. Add page # buttons event listener
//     //5. Set Active Page #
//     //6. Next and Previous Buttons
//     //7. Disable Page Navigation Buttons
//     //8. 


// // Needed Functions:
//     //1. A function that maps needed amount of buttons based on dividing total results of content by page content limit.
// const indexPages = (index) => {

// }


