import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment'

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const List = ({ data }) => {
    return (
        data.map(
            (child) =>
                <Comment child={child} />
        )
    )
}

const CommentList = connect(mapStateToProps)(List);

export default CommentList;