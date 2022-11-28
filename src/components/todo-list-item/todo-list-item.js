import React from 'react'

export default function TodoListItem({ label, key, important }) {
    const style = {
        color: important ? "tomato" : "black"
    }

    return (
        <li key={key} style={style} className="list-group-item">

            <span important={important} style={style} >{label}</span>

            <div className='btn-group-sm float-right'>
                {/* Зелёная кнопкка */}
                <button type="button" className='btn btn-outline-success mx-1'>
                    <i className='fa fa-exclamation' />
                </button>

                {/* Красная кнопка */}
                <button type="button" className='btn btn-outline-danger mx-1'>
                    <i className='fa fa-trash-o' />
                </button>

            </div>

        </li>)
} 