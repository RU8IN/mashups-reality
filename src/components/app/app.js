import React from 'react'
import Header from '../header'
import ItemStatusFilter from '../item-status-filter'
import SearchPanel from '../search-panel'
import TasksCounter from '../tasks-counter'
import ToDoList from '../todo-list/'
import ItemAddForm from '../item-add-form'

export default class App extends React.Component {

  maxId = 0

  createTask = (label: String) => {
    let task = {
      label: label,
      important: false,
      done: false,
      id: this.maxId++
    }
    return task
  }

  state = {
    tasks: [
      this.createTask("Weee"),
      this.createTask("Woo"),
      this.createTask("Wuuu"),
      this.createTask("Waaa"),
    ]
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

  addNewTask = (label: String) => {
    let task = this.createTask(label)

    this.setState(({ tasks }) => {
      return {
        tasks: [...tasks, task]
      }
    })
  }

  toggleImportant = (id) => {

    let new_tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.important = !task.important
        return task
      }
      return task
    })

    this.setState(new_tasks)
  }

  toggleDone = (id) => {

    let new_tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
        return task
      }
      return task
    })

    this.setState(new_tasks)
  }



  render() {

    const { tasks } = this.state
    const tasks_todo = tasks.filter(task => task.done).length
    const tasks_done = tasks.length - tasks_todo

    return (
      <div className="container">
        <div className='row' >
          <div className='col'>
            {/* Заголовок */}
            <Header />
          </div>
          <div className='col'>
            {/* Счётчик задач */}
            <TasksCounter toDo={tasks_todo} done={tasks_done} />
          </div>

        </div>

        <div className='row d-flex flex-nowrap'>
          <div className='col-8'>
            {/* Панель поиска */}
            <SearchPanel />
          </div>
          <div className='col'>
            {/* Фильтр */}
            <ItemStatusFilter />
          </div>
          {/* Кнопка для добавления новой задачи */}
          <div className='col-sm'>
            <ItemAddForm addNewTask={this.addNewTask} />
          </div>
        </div>

        <div className='row'>
          <div className='col pt-2'>
            <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask}
              toggleImportant={this.toggleImportant}
              toggleDone={this.toggleDone} />
          </div>
        </div>

      </div>)
  }

}


