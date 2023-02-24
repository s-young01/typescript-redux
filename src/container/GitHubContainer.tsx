import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import GitHubForm from '../components/GitHubForm';
import GitHubUser from '../components/GitHubUser';
import { rootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';

const GitHubContainer = () => {
    const {loading, data, error} = useSelector((state: rootState) => state.github.userProfile);
    const dispatch = useDispatch();

    const onClickUser = (username: string) => {
        dispatch(getUserProfileThunk(username));
    }
    return (
        <div>
            <GitHubForm onClickUser={onClickUser}/>
            {loading && <div>로딩중...</div>}
            {error && <div>에러 발생</div>}
            {data && <GitHubUser bio={data.bio} blog={data.blog}
                name={data.name} thumbnail={data.avatar_url}
            />}
        </div>
    );
};

export default GitHubContainer;