import React from 'react';

import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';

const Todo = ({text, todo, todos, setTodos}) => {
    //Eliminar tarea
    const deleteHandler = () => {
        //Filtra las tareas  y la elimina
        setTodos(todos.filter((x) => x.key !== todo.key));
    };
    //Modificar tarea
    const editHandler = (e) => { 

        const selectedItem = todos.map(todo =>{
            if(e.key === todo.key){
                // Nuevo input del usuario
            }
            return todo;
        });
        console.log(selectedItem.text);
        //Actualiza los cambios
        setTodos(selectedItem);
          
    };
    return(
        //Despliega la tareas agregada
        <div className = 'todo'>
            <div className = 'todos'>
                <li className = 'todo-item'>{text}</li>
            </div>
            <div className = 'buttons'>
                <button onClick = {editHandler} className = {'edit'}><FiEdit/></button>
                <button onClick = {deleteHandler} className = {'delete'}><TiDeleteOutline/></button>
            </div>
        </div>
    );
};

export default Todo;