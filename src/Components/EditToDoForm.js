import React, {useState} from "react";

export const EditTodoForm = ({editTodo, task}) => {
    const[value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <form className = 'ToDoForm' onSubmit={handleSubmit}>
            <input type = "text" className = 'todo-input' value = {value} placeholder = 'Update Task' onChange={(e) => setValue(e.target.value)}/>
            <button type = 'submit' className = 'todo-button'>Update Task</button>
                ToDoForm</form>
    )
}