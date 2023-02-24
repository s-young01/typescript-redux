import { GithubProfile } from "../../api/github";
import { AxiosError } from 'axios';
import { createAsyncAction } from "typesafe-actions";

// 1. 액션 타입 - 데이터 요청, 데이터 전송 성공, 데이터 전송 에러
export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR';

// 2. 액션 생성 함수
// createAsyncAction( 액션 타입들 ... )<undefined, 액션 타입에 들어갈 타입들...>();
export const getUserAsync = createAsyncAction(
    GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();