import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoLists from '../components/TodoLists';
import { rootState } from '../modules';
import { addTodo, delTodo, toggleTodo } from '../modules/todos';

const TodoListContainer = () => {
    const todos = useSelector((state: rootState) => state.todos);
    const dispatch = useDispatch();

    const onAddTodo = (text: string) => dispatch(addTodo(text)); 
    const onDelTodo = (id: number) => dispatch(delTodo(id));
    const onToggleTodo = (id: number) => dispatch(toggleTodo(id));
    return (
        <div>
            <TodoInsert onAddTodo={onAddTodo}/>
            <TodoLists todos={todos} 
            onDelTodo={onDelTodo}
            onToggleTodo={onToggleTodo}/>
        </div>
    );
};

export default TodoListContainer;