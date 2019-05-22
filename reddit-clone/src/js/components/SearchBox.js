import React from 'react';

class SearchBox extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm: ''
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
        console.log(this.state.searchTerm)
        event.preventDefault();
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