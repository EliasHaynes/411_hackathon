import React, {useState} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function Articles(props) {
    const [articles,setArticles] = useState();
    return (
        <div>
            <p>Article</p>
            <span>
                <h2>{props.title}</h2>
                <a>{props.url}</a>
            </span>
            <span>
                <p>{props.points}</p>
                <p>{props.author}</p>
                <p>{props.created_at}</p>
                <p>{props.comments}</p>
            
            </span>
        </div>
    )
}

export default Articles


//Props to grab and display data from API:
    //1. title - The title of the article
    //2. author - The author of article
    //3. url - The url of the article
    //4. created_at - Time article was created
    //5. 

