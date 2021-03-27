import React from 'react';

const Form = ({setTask, todos, setTodos, inputTask}) => {
    //Recibe el input del usuario
    const inputHandler = (task) => {
        console.log(task.target.value);
        setTask(task.target.value);
    }
    //Agrega el input a los Todos y asigna una llave 
    const submitHandler = (task) => {
        task.preventDefault();
        setTodos([
            ...todos, {text: inputTask, key: Math.random()*10}
        ]);
        setTask('');
    }
    return(
        // Recibe el input del usuario
        <form className='todo-form'>
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
    );
}

export default Form;