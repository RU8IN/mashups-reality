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
        const { id, label, deleteTask, done, important, toggleImportant, toggleDone } = this.props;
        var classes = classNames({ important, done })
        return (<li className="list-group-item">

            <span className={classes} onClick={() => { toggleDone(id) }}>{label}</span>
            <div className='btn-group-sm float-right'>
                {/* Зелёная кнопкка */}
                <button type="button" className='btn btn-outline-success mx-1' onClick={() => { toggleImportant(id) }}>
                    <i className='fa fa-exclamation' />
                </button>

                {/* Красная кнопка */}
                <button type="button" className='btn btn-outline-danger mx-1' onClick={() => {
                    deleteTask(this.props.id)
                }}>
                    <i className='fa fa-trash-o' />
                </button>

            </div>

        </li>);
    }
}