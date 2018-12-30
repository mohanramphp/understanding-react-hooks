import React from 'react';
import { Todo } from './Todo';
export const TodoList = ({ todos }) => {
    return (
        <ul id="myUL">
            {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
        </ul>
    );
};