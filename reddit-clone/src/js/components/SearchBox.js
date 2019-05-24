import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addData} from '../actions/index';

const mapDispatchToProps = (dispatch) => ({ 
    addData: data => dispatch(addData(data))
})

class SearchBox extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm: '',
            sort:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.makeLink = this.makeLink.bind(this);
    }

    handleChange(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleDropdownChange(event){
        this.setState({
            sort: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.searchTerm);
        axios.get(this.makeLink())
            .then((response) => {
                let comments = response.data.data.children;
                this.props.addData(comments);
            })
            .catch((error) => {
                console.log(error)
                let comments = [];
                this.props.addData(comments);
            });
    }

    makeLink(){
        return `http://www.reddit.com/user/${this.state.searchTerm}/overview/.json?sort=${this.state.sort}`
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.searchTerm} onChange={this.handleChange}></input>
                <select defaultValue='hot' onChange={this.handleDropdownChange}>    
                    <option value='hot'>hot</option>
                    <option value='new'>new</option>
                    <option value='top'>top</option>
                    <option value='controversial'>controversial</option>
                </select>
                <form onSubmit={this.handleSubmit}>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

const ConnectedSearchBox = connect(null, mapDispatchToProps)(SearchBox);

export default ConnectedSearchBox;