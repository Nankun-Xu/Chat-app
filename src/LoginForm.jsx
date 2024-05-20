import { useState } from "react";
import { fetchLogin } from "./services";

function LoginForm({ setLoggedin }) {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function login(e) {
        e.preventDefault();
        fetchLogin(username)
            .then(() =>
                setLoggedin(true)
            )
            .catch(err => {
                setErrorMessage(err.error);
            });
    }

    return (
        <div className="login">
            <form onSubmit={login}>
                <h1>Let's Chat!</h1>
                <label>
                    <span>Username:</span>
                </label>
                <input value={username} onInput={(e) => setUsername(e.target.value)} />
                <button disabled={!username}>Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default LoginForm;

