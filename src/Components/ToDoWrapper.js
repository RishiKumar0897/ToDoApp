import React, {useState} from "react";
import {TodoForm} from "./ToDoForm";
import {v4 as uuidv4} from 'uuid';
import {todo} from "./todo";
import {EditTodoForm} from "./EditToDoForm";
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([{}]);
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false}]);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {... todo, completed: !todo.completed} : todo));
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const editTodo = (id, newTask) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo));
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo));
    }
    return (
        <div className='ToDoWrapper'>
            <h1> Get Things Done! </h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task = {todo}/>
                    ) : (
                    <todo task={todo} key={{index}}
                    toggleComplete = {toggleComplete} deleteTodo = {deleteTodo} editTodo = {editTodo}/>
                )
            ))}

        </div>
    )
}