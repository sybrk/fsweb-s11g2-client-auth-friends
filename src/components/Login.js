import axios from "axios";
import { useContext } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {LoginContext} from "./../contexts/LoginProvider"
const Login = () => {
    const {login, setLogin} = useContext(LoginContext)

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
                <>
                <div className="flex flex-col items-center">

                
                <h1 className="text-7xl font-extrabold mb-3 mt-5">LOGIN</h1>
                <form onSubmit={loginSubmit}>
                    <div className="flex flex-col items-start gap-1">
                    <label htmlFor="username" className="font-bold text-3xl">USERNAME</label>
                    <input id="username" type="text" className="bg-black  text-white w-80 py-3" />
                    <label htmlFor="password" className="font-bold text-3xl">PASSWORD</label>
                    <input id="password" type="password" className="bg-black  text-white w-80 py-3"/>
                    <button className="bg-black mt-2 text-white min-w-80 px-10 py-3">SUBMIT</button>
                    </div>
                </form>
                </div>
                </>
            }


        </>
    )
}

export default Login