import TodoListItem from "../todo-list-item"


export default function ToDoList({tasks, deleteTask, toggleImportant, toggleDone}) {
    const elements = tasks.map( (item) => {
        return <TodoListItem {...item} key={item.id} deleteTask={deleteTask} 
        toggleImportant={toggleImportant}
        toggleDone={toggleDone}/>
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>)
}

