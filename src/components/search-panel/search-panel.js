import React from 'react'

export default class SearchPanel extends React.Component {

    state = {
        term: ""
    }
    
    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchChange(term)
    }   

    render() {
        return <input className='form-control' type="text" placeholder={this.searchText} id="search-panel" onChange={(event) => { this.onSearchChange(event) }} value={this.state.term}/>
    }

}