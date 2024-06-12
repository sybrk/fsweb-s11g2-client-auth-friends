import axios from "axios"
import { useContext } from "react"

import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { LoginContext } from "../contexts/LoginProvider"



const Logout = () => {

    const {login, setLogin, storage} = useContext(LoginContext)
    
    if (storage?.token) {
        axios.post('http://localhost:9000/api/logout',
            {

            },
            {
                headers: {
                    authorization: storage.token
                }
            }

        )
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    localStorage.removeItem("s11g2");
                    setLogin(false)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }


    return(
        <>
        {
            login == false
            ?
            <Redirect to="/login" />
            :
            ""

        }
        </>
    )
}

export default Logout