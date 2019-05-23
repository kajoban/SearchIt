import React from 'react';

const Comment = (props) => {
    let title = props.child.data.title || props.child.data.link_title
    let link = `www.reddit.com${props.child.data.permalink}`
    return(
        <div>
            {
            !props.child.data.body 
            ?
            <div>
                <p></p>
            </div> 
            :
            <div>

                <p>"{props.child.data.body}"</p>
                <a href='links' target='_blank'>
                    <p>Reply to "{title}" on r/{props.child.data.subreddit}. </p>
                </a>
                <p>{props.child.data.ups} upvotes.</p>
                <br/>
            </div> 
            }
        </div>
    )
}

export default Comment;