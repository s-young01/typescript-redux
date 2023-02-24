import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { getUserAsync } from "./actions";

//액션 타입
export type GithubAction = ActionType<typeof getUserAsync>
// 상태 타입
export type GithubState = {
    userProfile: {
        loading: boolean,
        data: null | GithubProfile,
        error: null | Error
    }
}