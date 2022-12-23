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
      this.createTask("Wueauua"),
      this.createTask("Waeaua"),
    ],
    searching_term: "",
    filter: "all"
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

  toggleParameter = (id, parameter: String) => {
    let new_tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task[parameter] = !task[parameter]
        return task
      }
      return task
    })

    this.setState(new_tasks)
  }

  toggleDone = (id) => {
    this.toggleParameter(id, 'done')
  }

  toggleImportant = (id) => {
    this.toggleParameter(id, 'important')
  }

  toggleHidden = (id) => {
    let new_tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.hidden = !task.hidden
        return task
      }
      return task
    })

    this.setState(new_tasks)
  }

  searchByTerm = (tasks, term: String) => {
    if (term.length === 0) {
      return tasks
    }
    return this.state.tasks.filter(({ label }) => { return label.toLowerCase().includes(term.toLowerCase()) })
  }

  onSearchChange = (searching_term: String) => {
    this.setState({ searching_term });
  }

  onFilterChange = (filter) => {
    console.log(filter)
    this.setState({filter})
  }

  filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'all':
        return tasks
      case 'active':
        return tasks.filter(({done}) => !done)
      case 'done':
        return tasks.filter(({done}) => done)
      default:
        return tasks
    }
  }

  render() {

    const { tasks, searching_term, filter } = this.state
    const tasks_done = tasks.filter(task => task.done).length
    const tasks_todo = tasks.length - tasks_done
    const searched_tasks = this.searchByTerm(tasks, searching_term)
    const filtered_tasks = this.filterTasks(searched_tasks, this.state.filter)

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
            <SearchPanel tasks={tasks} onSearchChange={this.onSearchChange} />
          </div>
          <div className='col'>
            {/* Фильтр */}
            <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter}/>
          </div>

        </div>

        <div className='row'>
          <div className='col pt-3'>
            <ToDoList tasks={filtered_tasks} deleteTask={this.deleteTask}
              toggleImportant={this.toggleImportant}
              toggleDone={this.toggleDone} />
          </div>
        </div>
        <div className='row'>
          {/* Кнопка для добавления новой задачи */}
          <div className='col mt-3'>
            <ItemAddForm addNewTask={this.addNewTask} />
          </div>
        </div>
      </div>)
  }

}


