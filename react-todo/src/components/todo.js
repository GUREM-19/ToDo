import React from 'react';

import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti'
import Form from './form';
const Todo = ({text, todo, todos, setTodos, inputTask, inputHandler}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((x) => x.key !== todo.key));
    };
    const editHandler = () => { };
    return(
        <div className = 'todo'>
            <li className = 'todo-item'>{text}</li>
            <button onClick = {editHandler} className = 'edit'><FiEdit/></button>
            <button onClick = {deleteHandler} className = 'delete'><TiDeleteOutline/></button>
        </div>
    );
};

export default Todo;