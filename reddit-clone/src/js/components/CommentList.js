import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment'

const mapStateToProps = (state) => { //there is a problem here
    console.log('this is the state in comment list')
    console.log(state.data);
    return {
        data: state.data
    }
}

const List = (props) => {
    return (
        props.data.map(
            (child) =>
                <Comment child={child} />
        )
    )
}

const CommentList = connect(mapStateToProps)(List);

export default CommentList;