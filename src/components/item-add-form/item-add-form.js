import React from 'react'

export default class ItemAddForm extends React.Component {

    state = {
        input_value: ""
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addNewTask(this.state.input_value)
        this.setState({ input_value: "" })
    }

    onInputChange = (event) => {
        this.setState({ input_value: event.target.value })
    }

    render() {
        return (
            <form onSubmit={(event) => { this.onSubmit(event) }} className="form-inline">
                <input type="text" className='form-control flex-fill' onChange={this.onInputChange} value={this.state.input_value} />
                <button type="submit" className="btn btn-outline-success ml-2">Новая задача</button>
            </form>
        )
    }

}
