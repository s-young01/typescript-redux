import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { rootState } from '../modules';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
    // 상태 조회
    // 상태의 타입을 지정하기 위해 전에 만들었던 rootReducer의 상태 타입을 선언해준다
    const count = useSelector((state: rootState) => state.counter.count);
    const dispatch = useDispatch();

    // 디스패치 함수 
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    return (
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

export default CounterContainer;