import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from "./actions";

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