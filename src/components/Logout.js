import axios from "axios"
import { useState } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"



const Logout = () => {

    const storage = JSON.parse(localStorage.getItem("s11g2"))
    const [login, setLogin] = useState(true)
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