import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addData} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({ //theres a problem here
    addData: data => dispatch(addData(data))
})

class SearchBox extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.searchTerm);
        axios.get(`http://www.reddit.com/user/${this.state.searchTerm}/overview/.json`)
            .then((response) => {
                let comments = response.data.data.children;
                console.log(comments);
                this.props.addData(comments);
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

const ConnectedSearchBox = connect(null, mapDispatchToProps)(SearchBox);

export default ConnectedSearchBox;