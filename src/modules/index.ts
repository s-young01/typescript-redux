import { combineReducers } from 'redux';
import counter from './counter';
import github from './github';
import todos from './todos';

export const rootReducer = combineReducers({
    counter,
    todos,
    github
});

export default rootReducer;

// rootReducer함수 실행 시, state 리턴
// ReturnType<typeof 함수>은 특정 함수의 리턴하는 타입을 추론한다
// useSelector(state => state.counter)
// 따라서 아래 구문은 스토어의 상태값 타입을 추론한다.
export type rootState = ReturnType<typeof rootReducer>