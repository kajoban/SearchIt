import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addData} from '../actions/index';

class SearchBox extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm: '',
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            searchTerm: event.target.value
        })
        console.log(this.state.searchTerm);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.searchTerm);
        axios.get(`http://www.reddit.com/user/${this.state.searchTerm}/overview/.json`)
            .then((response) => {
                let comments = response.data.data.children
                this.setState({
                    data: comments
                })
                console.log(this.state.data)
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

export default SearchBox;