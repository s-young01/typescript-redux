import React from 'react';

// 상태 값 count,
// 상태 업데이트 해주는 함수 onIncrease, onDecrease
// Props로 받아오기

// 받아온 Props타입 지정
type CountProps = {
    count: number,
    onIncrease: () => void,
    onDecrease: () => void
}
const Counter = ({count, onIncrease, onDecrease}: CountProps) => {
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;