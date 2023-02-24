import React, { ChangeEvent, useState } from 'react';

type GithubFormProps = {
    onClickUser: (username: string) => void
}
const GitHubForm = ({onClickUser}: GithubFormProps) => {
    const [input, setInput] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClickUser(input);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input}/>
                <button type='submit'>조회하기</button>
            </form>
        </div>
    );
};

export default GitHubForm;