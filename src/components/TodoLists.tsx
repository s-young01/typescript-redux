import React from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
    todo: Todo,
    onDelTodo: (id: number) => void,
    onToggleTodo: (id: number) => void
}
// 리스트 컴포넌트 생성
function TodoItems({todo, onDelTodo, onToggleTodo}: TodoItemProps) {
    // 스타일 객체 생성
    const removeStyle = {
        textDecoration: todo.isDone ? 'line-through' : 'none'
    }
    const delTodo = () => {
        onDelTodo(todo.id);
    }
    const toggleTodo = () => {
        onToggleTodo(todo.id);
    }
    return(
        <li key={todo.id}
            style={removeStyle}>
            <span onClick={toggleTodo}>{todo.text}</span>
            <button onClick={delTodo}>삭제</button>    
        </li>
    );
}

// props 타입 지정
type TodoListProps = {
    todos: Todo[],
    onDelTodo: (id: number) => void,
    onToggleTodo: (id: number) => void
}

const TodoLists = ({todos, onDelTodo, onToggleTodo}: TodoListProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo => <TodoItems key={todo.id} todo={todo} 
                onDelTodo={onDelTodo} onToggleTodo={onToggleTodo}/>)}
            </ul>
        </div>
    );
};

export default TodoLists;