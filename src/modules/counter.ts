// 1. 액션 타입
// action.type이 string으로 추론되지 않고,
// 실제 문자열으로 추론되도록 as const 를 붙여 타입 단언을 해줌
const INCREASE = 'INCREASE' as const; // 타입 단언으로 유일한 값처럼 추론 되게 만들어줌
const DECREASE = 'DECREASE' as const; // 타입 단언을 하지 않으면 action.type이 일반 문자열로 인식함

// 2. 액션 생성 함수 return {type: INCREASE} 이런 형태를 반환하는 함수 작성
export const increase = () => ({ type: INCREASE }) 
export const decrease = () => ({ type: DECREASE })

// 액션 객체에 대한 타입 
// 해당 함수가 리턴하는 타입으로 타입을 지정해라
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>

// 상태에 대한 타입
type CounterState = { count: number }

// 초기 값 설정
const initialState: CounterState = { count: 0 }

// 3. 리듀서 함수
function counter(state: CounterState=initialState, 
    action: CounterAction) {
        switch(action.type) {
            case INCREASE:
                return { count: state.count + 1 };
            case DECREASE:
                return { count: state.count - 1 };
            default:
                return state;
        }
}

export default counter;