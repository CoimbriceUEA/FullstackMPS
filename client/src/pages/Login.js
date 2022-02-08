import axios from 'axios';
import React,  { useState } from 'react';

function Login() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const login = () => {
        const data = {username: username, password};
        axios.post("http://localhost:3001/auth/login", data).then((response) =>{
            if(response.data.error) {
                alert(response.data.error);
            } else {
                console.log(response.data);
                sessionStorage.setItem("acessToken", response.data);
            }
        });
    }

  return (
        <div>
            <input type="text"
            onChange={(event) => {
                setUsername(event.target.value);
                }}
            />
            <input
                type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <button onClick={login}> Login </button>
        </div>
    );
}

export default Login;
