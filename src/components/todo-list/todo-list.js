import TodoListItem from "../todo-list-item"


export default function ToDoList({objects}) {
    
    const elements = objects.map( (item) => {
        return <TodoListItem {...item}/>
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>)
}

