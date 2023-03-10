import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// 1. 액션 타입
// action.type이 string으로 추론되지 않고,
// 실제 문자열으로 추론되도록 as const 를 붙여 타입 단언을 해줌
// const INCREASE = 'INCREASE' as const;
// const DECREASE = 'DECREASE' as const;

// typesafe-actions 적용
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 2. 액션 생성 함수 return {type: INCREASE} 이런 형태를 반환하는 함수 작성
// export const increase = () => ({ type: INCREASE }) 
// export const decrease = () => ({ type: DECREASE })

// typesafe-actions 적용
// 액션 객체에 type속성만 있는 경우
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();

// 액션 객체에 대한 타입 
// 해당 함수가 리턴하는 타입으로 타입을 지정해라
// type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>

// typesafe-actions 적용
const actions = { increase, decrease }; // 액션 생성 함수
// ActionType을 사용하여 모든 액션 객체들의 타입을 지정
type CounterAction = ActionType<typeof actions> 

// 상태에 대한 타입
type CounterState = { count: number }

// 초기 값 설정
const initialState: CounterState = { count: 0 }

// 3. 리듀서 함수
// function counter(state: CounterState=initialState, 
//     action: CounterAction) {
//         switch(action.type) {
//             case INCREASE:
//                 return { count: state.count + 1 };
//             case DECREASE:
//                 return { count: state.count - 1 };
//             default:
//                 return state;
//         }
// }

// typesafe-actions 적용
// 방법 1
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
})
// 방법 2
// const counter = createReducer<CounterState, CounterAction>(initialState);
// .handleAction(INCREASE, state => ({ count: state.count + 1 }))
// .handleAction(DECREASE, state => ({ count: state.count - 1 }))


export default counter;