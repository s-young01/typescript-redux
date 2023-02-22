import React, { useState } from 'react';

// props타입 지정
type TodoAddProps = {
    onAddTodo: (text: string) => void
}
const TodoInsert = ({onAddTodo}: TodoAddProps) => {
    // input 입력 값 상태관리
    const [inputText, setInputTtext] = useState('');
    const onChange = (e :React.ChangeEvent<HTMLInputElement>) => setInputTtext(e. target.value);
    // 클릭 이벤트
    const onClick = () => {
        onAddTodo(inputText);
        setInputTtext('');
    }
    return (
        <div>
            <input placeholder='할 일을 작성하세요.' 
            value={inputText} onChange={onChange}/>
            <button onClick={onClick}>+</button>
        </div>
    );
};

export default TodoInsert;