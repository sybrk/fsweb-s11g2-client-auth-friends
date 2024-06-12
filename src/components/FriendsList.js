import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { LoginContext } from "./../contexts/LoginProvider"
const FriendsList = () => {

    const [friends, setFriends] = useState([])
    const { login, storage } = useContext(LoginContext)

    useEffect(() => {

        if (login) {
            axios.get('http://localhost:9000/api/friends', {
                headers: {
                    authorization: storage.token
                }
            })
                .then(function (response) {
                    // handle success
                    if (response.status == 200) {
                        console.log(response)
                        setFriends(response.data)
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }




    }, [])
    return (
        <>
            {
                (login === true)
                    ?
                    <div className="flex flex-col items-center px-10">
                        <h1 className="text-7xl font-extrabold mb-3 mt-5">FRIENDS LIST</h1>
                        <div className="flex flex-col items-start gap-3 text-3xl">
                        {friends.length && friends.map(friend => {
                            return (
                                <p className="uppercase font-bold" key={friend.id}>- {friend.name} - {friend.email}</p>
                            )
                        })}
                        </div>
                    </div>
                    :
                    <Redirect to="/login" />
                //console.log("hello")

            }

        </>
    )
}

export default FriendsList