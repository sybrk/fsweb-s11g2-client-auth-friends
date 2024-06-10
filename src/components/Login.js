import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
    const [login, setLogin] = useState(false)
    const loginSubmit = async (e) => {
        e.preventDefault()
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        axios.post('http://localhost:9000/api/login', {
            username,
            password
        })
            .then(function (response) {
                console.log(response)
                if (response.status == 200) {
                    localStorage.setItem("s11g2", JSON.stringify(response.data));
                    setLogin(true)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {login
                ?
                <Redirect to="/friendslist" />
                :
                <form onSubmit={loginSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                    <button>Submit</button>
                </form>
            }


        </>
    )
}

export default Login