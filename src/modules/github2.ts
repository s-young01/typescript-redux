import {  getUserProfile, GithubProfile } from "../api/github";
import { AxiosError } from 'axios';
import { Dispatch } from "redux";
import { ActionType, createAsyncAction, createReducer, deprecated  } from "typesafe-actions";

// 1. 액션 타입 - 데이터 요청, 데이터 전송 성공, 데이터 전송 에러
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
const GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR';

// 2. 액션 생성 함수
// createAsyncAction( 액션 타입들 ... )<undefined, 액션 타입에 들어갈 타입들...>();
export const getUserAsync = createAsyncAction(
    GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();

// 3. 액션, 상태 타입 & 초기 상태 지정
//액션 타입
type GithubAction = ActionType<typeof getUserAsync>
// 상태 타입
export type GithubState = {
    userProfile: {
        loading: boolean,
        data: null | GithubProfile,
        error: null | Error
    }
}
// 초기 상태 값
const initialState: GithubState = {
    userProfile: {
        loading: false,
        data: null,
        error: null
    }
}

// thunk 함수
export const getUserProfileThunk = (usrename: string): any => async (dispatch: Dispatch) => {
    dispatch({type: GET_USER_PROFILE});
    try {
        const userProfile = await  getUserProfile(usrename); 
        dispatch({type: GET_USER_PROFILE_SUCCESS, payload: userProfile});
    }
    catch(e) {
        dispatch({type: GET_USER_PROFILE_ERROR, payload: e});
    }
}

// 4. 리듀서 함수
// createReducer<상태 타입, 액션 타입>(초기 상태 값, { 리턴 값 })
const github2 = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: state => ({userProfile: {
        loading: true, data: null, error: null
    }}),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({userProfile: {
        loading: false, data: action.payload, error: null
    }}),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({userProfile: {
        loading: false, data: null, error: action.payload
    }})
});

export default github2;