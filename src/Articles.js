import React, {useState} from 'react';

//This component is rendered in the SearchBar component
function Articles(props) {
    const [articles,setArticles] = useState();
    return (
        <div>
            <span keys={props.index}>
                <h2>{props.title}</h2>
                <a>{props.url}</a>
                <p>{props.points}</p>
                <p>{props.author}</p>
                <p>{props.created_at}</p>
                <p>{props.comments}</p>
            </span>
        </div>
    )
}

export default Articles



