import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { TodosDispatch } from './TodoReducer';
import { ADD_ACTION } from './TodoAction';
const headerStyle = {
    margin: '5px',
}

export const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useContext(TodosDispatch);
    const onChangeText = ({ target: { value } }) => setText(value);
    const submitForm = () => {
        dispatch({
            type: ADD_ACTION,
            payload: {
                id: uuid(),
                completed: false,
                text,
            }
        });
        setText('');
    }
    return (
        <div id="myDIV" className="header">
            <h2 style={headerStyle}>TODO List</h2>
            <input type="text" name="text" id="myInput" placeholder="Enter your To Do..." value={text} onChange={onChangeText} />
            <span onClick={submitForm} className="addBtn">Add</span>
        </div>
    );
};