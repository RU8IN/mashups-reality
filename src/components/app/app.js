import React from 'react'
import Header from '../header'
import ItemStatusFilter from '../item-status-filter'
import SearchPanel from '../search-panel'
import TasksCounter from '../tasks-counter'
import ToDoList from '../todo-list/'


export default function App() {

  const objects = [
    { label: "Wee", important: false, key: "aaa" },
    { label: "Woo", important: true, key: "ыыы" },
    { label: "Wuu", important: false, key: "эээ" },
    { label: "Waa", important: true, key: "ооо" },
  ]

  return (
    <div className="container">
      <div className='row' >
        <div className='col'>
          <Header />
        </div>
        <div className='col'>
          <TasksCounter toDo={2} done={5}/>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <SearchPanel />
        </div>
        <div className='col'>
          <ItemStatusFilter />
        </div>
      </div>

      <div className='row'>
        <div className='col pt-2'>
          <ToDoList objects={objects} />
        </div>
      </div>

    </div>)
}


