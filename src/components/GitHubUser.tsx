import React from 'react';

// Props타입 지정
type GithubUserProps = {
    name: string | null,
    thumbnail: string,
    bio: string | null,
    blog: string
}
const GitHubUser = ({name, thumbnail, bio, blog}: GithubUserProps) => {
    return (
        <div>
            <div>
                <img src={thumbnail} alt='userImg'/>
                <div>{name}</div>
            </div>
            <p>{bio}</p>
            <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
        </div>
    );
};

export default GitHubUser;