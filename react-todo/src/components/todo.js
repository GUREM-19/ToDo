import React from 'react';

import {FiEdit} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((x) => x.key !== todo.key));
    };
    const editHandler = () => { 

        const selectedItem = todos.find(x => x.key === todo.key)
        console.log(selectedItem.text);

    };
    return(
        <div className = 'todo'>
            <li className = 'todo-item'>{text}</li>
            <button onClick = {editHandler} className = 'edit'><FiEdit/></button>
            <button onClick = {deleteHandler} className = 'delete'><TiDeleteOutline/></button>
        </div>
    );
};

export default Todo;