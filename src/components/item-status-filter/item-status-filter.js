import React from "react";
import classNames from "classnames";
export default class ItemStatusFilter extends React.Component {

    buttons = [
        {"name": "all", "label": "All"},
        {"name": "active", "label": "Active"},
        {"name": "done", "label": "Done"},
    ]

    render() {

        const {filter, onFilterChange} = this.props

        // const buttons = Filters.values.forEach((filter) => filter.description)
        const buttons = Object.values(this.buttons).map(({name, label}) => {
            const classes = classNames("btn", {"btn-primary": name === filter, "btn-outline-secondary": name !== filter})
            return <button type="button" key={name} className={classes} onClick={() => {onFilterChange(name)}}>{label}</button>
        } ) 
        console.log(buttons)
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

// 