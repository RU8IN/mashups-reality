import React from 'react'
import './todo-list-item.css'
import classNames from 'classnames'

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }

    onExclamationButtonClick = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { label, key } = this.props;
        const { done, important } = this.state;
        var classes = classNames({important, done})

        return (<li key={key} className="list-group-item">
            
            <span className={classes} onClick={this.onLabelClick}>{label}</span>
            <div className='btn-group-sm float-right'>
                {/* Зелёная кнопкка */}
                <button type="button" className='btn btn-outline-success mx-1' onClick={this.onExclamationButtonClick}>
                    <i className='fa fa-exclamation' />
                </button>

                {/* Красная кнопка */}
                <button type="button" className='btn btn-outline-danger mx-1'>
                    <i className='fa fa-trash-o' />
                </button>

            </div>

        </li>);
    }
}