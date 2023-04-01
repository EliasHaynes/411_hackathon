import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Articles from './Articles';

function SearchBar(props) {
    //For the 
    const [searchInputValue,setSearchInputValue] = useState('');
    const [theData,setTheData] = useState([]);

    useEffect(() => {
        axios.get(`http://hn.algolia.com/api/v1/search?dateRange=${props.from}&query=${searchInputValue}&sort=${props.orderBy}&type=${props.searchBy}`)
        .then((res) => {
            console.log('the res:', res)
            const { hits } = res.data
            console.log(hits)
            setTheData(hits)
        })
    },[searchInputValue,props.searchBy,props.orderBy,props.from])

    const onChangeHandler=(e) => {
        let usersSearchValue= e.target.value
        setSearchInputValue(usersSearchValue);
        console.log('searchInputValue:', searchInputValue)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='search' value={searchInputValue} placeholder='Search'  onChange={onChangeHandler}></input>
            </form>
            {theData.map((article,index) => {
                return (
                <Articles 
                    keys={article.index}
                    title={article.title}
                    url={article.url}
                    points={article.points}
                    author={article.author}
                    created_at={article.created_at}
                    comments={article.comments}
                />
            )})
            }
        </div>
    )
}

export default SearchBar

//I got the search by author part to work now i need to do by comments and stories

//The query is completed by the searchbar state var. The value of searchbar is the value of the input that the user types in the searchbar.
//The userSearch state var saves the response after the query is completed.