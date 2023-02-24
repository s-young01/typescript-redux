import { createReducer } from "typesafe-actions";
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';
import { GithubAction, GithubState } from "./types";

// 초기 상태 값
const initialState: GithubState = {
    userProfile: {
        loading: false,
        data: null,
        error: null
    }
}

// 4. 리듀서 함수
// createReducer<상태 타입, 액션 타입>(초기 상태 값, { 리턴 값 })
const github = createReducer<GithubState, GithubAction>(initialState, {
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

export default github;