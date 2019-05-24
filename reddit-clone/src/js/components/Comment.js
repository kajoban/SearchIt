import React from 'react';

const Comment = (props) => {
    let title = props.child.data.title || props.child.data.link_title
    let link = `www.reddit.com${props.child.data.permalink}`
    let subreddit = `www.reddit.com${props.child.data.subreddit}`
    return (
        <div className='comment'>
            {
                !props.child.data.body
                    ?
                    <div>
                        <p></p>
                    </div>
                    :
                    <div>
                        <p className='replyto'> Reply to <a href={link} target='_blank'>"{title}" </a> on <a href={subreddit}>r/{props.child.data.subreddit}</a></p>
                        <p className='reply'>"{props.child.data.body}"</p>
                        <p className='upvotes'>{props.child.data.ups} <i className="fas fa-arrow-up"></i>'s</p>
                        <br />
                    </div>
            }
        </div>
    )
}

export default Comment;