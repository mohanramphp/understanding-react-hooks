import React, { useReducer } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

import { TodoReducer, TodosDispatch } from './TodoReducer';

export const Todos = ({ todos }) => {
    const [state, dispatch] = useReducer(TodoReducer, todos);

    return (
        <div className="todos-container">
            <TodosDispatch.Provider value={dispatch}>
                <TodoForm></TodoForm>
                <TodoList todos={state}></TodoList>
            </TodosDispatch.Provider>
        </div>
    );
}
