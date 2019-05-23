import React from 'react';

const Comment = (props) => {
    return(
        <div>
            <div>
                <p>{props.child.data.title}</p>
            </div>
        </div>
    )
}

export default Comment;