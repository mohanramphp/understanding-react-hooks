import { createContext } from 'react';
import { ADD_ACTION, DELETE_ACTION, TODO_COMPLETE_ACTION } from './TodoAction';

export const TodosDispatch = createContext(null);

export const TodoReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_ACTION:
            return [
                ...state,
                payload
            ];
        case DELETE_ACTION:
            return state.filter(({ id }) => id !== payload.id);
        case TODO_COMPLETE_ACTION:
            return state.map(todo => (todo.id === payload.id) ? { ...todo, completed: !todo.completed } : todo);
        default:
            return state;
    }
};
