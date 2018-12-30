import React, { useContext } from 'react';
import { TodosDispatch } from './TodoReducer';
import { DELETE_ACTION, TODO_COMPLETE_ACTION } from './TodoAction';

export const Todo = ({ todo }) => {

    const { id, text, completed } = todo;
    const dispatch = useContext(TodosDispatch);

    const toggleTodo = () => {
        dispatch({ type: TODO_COMPLETE_ACTION, payload: { id } });
    }

    const deleteTodo = (e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete?')) {
            dispatch({ type: DELETE_ACTION, payload: { id } });
        }
        return;
    }

    return (
        <li onClick={toggleTodo} className={completed ? 'checked' : null}>
            {text}
            <span onClick={deleteTodo} className="close">×</span>
        </li>
    );
};