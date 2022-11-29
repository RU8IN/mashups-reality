import TodoListItem from "../todo-list-item"


export default function ToDoList({tasks, deleteTask}) {
    const elements = tasks.map( (item) => {
        return <TodoListItem {...item} key={item.id} deleteTask={deleteTask}/>
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>)
}

