import React from 'react';

import Todo  from './todo';
const List = ({todos, setTodos}) => {
    console.log(todos);
    return (
        <div className = 'todo-container'>
            <ul className = 'todo-list'>
                {todos.map((todo) => (
                    <Todo
                        key = {todo.key}
                        text = {todo.text}
                        setTodos = {setTodos}
                        todo = {todo}
                        todos = {todos}
                        />
                ))}
            </ul>
        </div>
    );
};

export default List;