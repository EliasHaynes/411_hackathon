import React, {useState} from 'react';

function Comments(props) {
    const [comments,setCommetns] = useState();

    return (
        <div>
            <p>Comments</p>
            <span>
                <p>{props.author}</p>
                <p>{props.created_at}</p>
                <p>{props.created_at}</p>
            </span>
        </div>
    )
}

export default Comments

//The way i may have the comments page is a conditional render that will check the values of the Filter component from its properties/state