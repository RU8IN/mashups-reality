import React from 'react'
import './todo-list-item.css'
import classNames from 'classnames'

export default class TodoListItem extends React.Component {

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
        const { id, label, deleteTask, done, important, hidden = null, toggleImportant, toggleDone } = this.props;
        var classes = classNames({ important, done })
        return (<li className="list-group-item" hidden={hidden}>

            <span className={classes} onClick={() => { toggleDone(id) }}>{label}</span>
            <div className='btn-group float-right'>
                {/* Зелёная кнопкка */}
                <button type="button" className='btn btn-outline-success w-25' onClick={() => { toggleImportant(id) }}>
                    <i className='fa fa-exclamation' />
                </button>

                {/* Красная кнопка */}
                <button type="button" className='btn btn-outline-danger w-25' onClick={() => {
                    deleteTask(this.props.id)
                }}>
                    <i className='fa fa-trash-o' />
                </button>

            </div>

        </li>);
    }
}