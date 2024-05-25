import React, {useState} from 'react';
import TodoForm from "./TodoForm.tsx";
import {uuid} from "uuidv4";
const TodoWrapper = () => {
    const [todos, setTodos] = useState()

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuid(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo}/>
        </div>
    );
};

export default TodoWrapper;
