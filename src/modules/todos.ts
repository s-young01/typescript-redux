// 1. 액션 타입
const ADD_TODO = 'ADD_TODO' as const;
const DEL_TODO = 'DEL_TODO' as const;
const TOGGLE_TODO = 'TOGGLE_TODO' as const;

// 새 항목 추가 시 사용할 id 값
let nextId = 1;
// 2. 액션 생성 함수
export const addTodo = (text: string) => ({
    type: ADD_TODO, 
    payload: {
        id: nextId++,
        text: text
    }
})
export const delTodo = (id: number) => ({
    type: DEL_TODO,
    payload: id
})
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})

// action객체에 대한 타입
type TodoAaction = ReturnType<typeof addTodo>
| ReturnType<typeof delTodo> | ReturnType<typeof toggleTodo>

// 할 일 항목 한 개의 타입 정의
export type Todo = {
    id: number,
    text: string,
    isDone: boolean
}

//state에 대한 타입 
export type TodoState = Todo[];

// 초기 값 설정
const initialState: TodoState = [];

// 3. 리듀서 함수 (state와 actoin 타입 지정)
function todos(state: TodoState=initialState,
    action: TodoAaction) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    isDone: false
                }
            ];
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? 
                {...todo, isDone: !todo.isDone} : todo);
        default:
            return state;
    }
}

export default todos;