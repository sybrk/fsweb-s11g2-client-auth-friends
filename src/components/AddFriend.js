import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

const AddFriend = () => {
    const storage = JSON.parse(localStorage.getItem("s11g2"))
    const [login, setLogin] = useState(null)

    useEffect(() => {
        if (storage?.token) {
            console.log(login)
            setLogin(true)
        }
    },[storage])
    const loginSubmit = (e) => {
        e.preventDefault()
        const friendName = document.getElementById("friendName").value;
        const friendAge = document.getElementById("friendAge").value;
        const friendMail = document.getElementById("email").value;
        const id = Date.now()
        console.log(storage.token)
        
        axios.post('http://localhost:9000/api/friends',
             {
                id: id,
                name: friendName,
                age: friendAge,
                email: friendMail
            },
            {
            headers: {
                authorization: storage.token
            }
        }
        
        )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
        {
            (login === false)
            ?
            <div>
                <h1>ADD FRIEND</h1>
            <form onSubmit={loginSubmit}>
                <label htmlFor="friendName">Friend Name</label>
                <input id="friendName" type="text" />
                <label htmlFor="friendAge">Friend Age</label>
                <input id="friendAge" type="number" />
                <label htmlFor="email">Friend Email</label>
                <input id="email" type="email" />
                <button>Submit</button>
            </form>
            </div>
            :
            <Redirect to="/login"/>
        }
            

        </>
    )
}

export default AddFriend