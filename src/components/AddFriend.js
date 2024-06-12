import axios from "axios"
import { useEffect, useContext } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import {LoginContext} from "./../contexts/LoginProvider"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const AddFriend = () => {
   
    const {login, storage} = useContext(LoginContext)

    useEffect(() => {
        if (login) {
            console.log(login)
        }
    },[storage])
    const friendSubmit = (e) => {
        e.preventDefault()
        const friendName = document.getElementById("friendName");
        const friendAge = document.getElementById("friendAge");
        const friendMail = document.getElementById("email");
        const id = Date.now()
        
        
        axios.post('http://localhost:9000/api/friends',
             {
                id: id,
                name: friendName.value,
                age: friendAge.value,
                email: friendMail.value
            },
            {
            headers: {
                authorization: storage.token
            }
        }
        
        )
        .then(response => {
            if(response.status == 200) {
                friendAge.value = "";
                friendMail.value = "";
                friendName.value = "";
                toast("Friend Added")
                
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
        {
            (login === true)
            ?
            <div className="flex flex-col items-center">
                <h1 className="text-7xl font-extrabold mb-3 mt-5">ADD FRIEND</h1>
            <form onSubmit={friendSubmit}>
            <div className="flex flex-col items-start gap-1">
                <label htmlFor="friendName" className="font-bold text-3xl">FRIEND NAME</label>
                <input id="friendName" type="text" className="bg-black  text-white w-80 py-3" />
                <label htmlFor="friendAge" className="font-bold text-3xl">FRIEND AGE</label>
                <input id="friendAge" type="number" className="bg-black  text-white w-80 py-3" />
                <label htmlFor="email" className="font-bold text-3xl">FRIEND EMAIL</label>
                <input id="email" type="email" className="bg-black  text-white w-80 py-3" />
                <button className="bg-black mt-2 text-white min-w-80 px-10 py-3">SUBMIT</button>
                </div>
            </form>
            <ToastContainer />
            </div>
            :
            <Redirect to="/login"/>
        }
            

        </>
    )
}

export default AddFriend