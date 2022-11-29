import React from 'react'

export default class ItemAddForm extends React.Component {

    render() {
        return (
            <button type="button" className="btn btn-outline-success float-right btn-block" onClick={() => {this.props.addNewTask("heheds")}}>Новая задача</button>
        )
    }

}
