import './Login.css';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isPending } = useLogin();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(userName, password);
        login(userName, password);
    };

    return (
        <div className="login" onSubmit={onSubmitHandler}>
            <div className="login-left"></div>
            <div className="login-right">
                <form className="login-form">
                    <h2>Login</h2>
                    <label>
                        <span>Username</span>
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            required
                        />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                    {!isPending && <button>Login</button>}
                    {isPending && <button disabled>loading...</button>}
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;
