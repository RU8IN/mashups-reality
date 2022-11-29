import React from 'react'
import Header from '../header'
import ItemStatusFilter from '../item-status-filter'
import SearchPanel from '../search-panel'
import TasksCounter from '../tasks-counter'
import ToDoList from '../todo-list/'


export default class App extends React.Component {

  state = {
    tasks: [
      { label: "Wee", important: false, id: "aaa" },
      { label: "Woo", important: true, id: "ыыы" },
      { label: "Wuu", important: false, id: "эээ" },
      { label: "Waa", important: true, id: "ооо" },]
  }

  deleteTask = (id) => {
    this.setState(
      ({ tasks }) => {
        return {
          tasks: tasks.filter((task) => task.id !== id)
        }
      }
    )
  }

  addNewTask = () => {
    let newTask = {
      label: "hehe", important: false, id: this.state.tasks.length + 1
    }

    this.setState(({ tasks }) => {
      return {
        tasks: [...tasks, newTask]
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className='row' >
          <div className='col'>
            <Header />
          </div>
          <div className='col'>
            <TasksCounter toDo={2} done={5} />
          </div>

        </div>

        <div className='row d-flex flex-nowrap'>
          <div className='col-8'>
            <SearchPanel />
          </div>
          <div className='col'>
            <ItemStatusFilter />
          </div>
          <div className='col-sm'>
            <button type="button" className="btn btn-outline-success float-right btn-block" onClick={this.addNewTask}>Новая задача</button>
          </div>
        </div>

        <div className='row'>
          <div className='col pt-2'>
            <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
          </div>
        </div>

      </div>)
  }

}


