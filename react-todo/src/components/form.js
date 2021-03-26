import React, {useState} from 'react';

const Form = ({setTask, todos, setTodos, inputTask}) => {
    const inputHandler = (task) => {
        console.log(task.target.value);
        setTask(task.target.value);
    }
    const submitHandler = (task) => {
        task.preventDefault();
        setTodos([
            ...todos, {text: inputTask, key: Math.random()*10}
        ]);
        setTask('');
    }
    return(
        <form>
            <input 
                value = {inputTask}
                type = 'text' 
                className = 'todo-input'
                placeholder = 'Escribe una tarea'
                onChange = {inputHandler}
            />
            <button 
                className = 'todo-button' 
                type = 'submit' 
                onClick = {submitHandler}>
                Agregar
            </button>
        </form>
    )
}

export default Form;