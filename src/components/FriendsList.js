import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
const FriendsList = () => {

    const [friends, setFriends] = useState([])
    const [login, setLogin] = useState(null)

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("s11g2"))
        if (storage?.token) {
            setLogin(true)
            console.log(login)
            axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: storage.token
            }
        })
            .then(function (response) {
                // handle success
                if(response.status == 200) {
                    console.log(response)
                    setFriends(response.data)
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLogin(false)
            })
        }
        
       
        

    }, [])
    return (
        <>
        {
            (login === false)
            ?
                friends.length && friends.map(friend => {
                    return(
                        <p key={friend.id}>{friend.name} - {friend.email}</p>
                    )
                })
            :
            <Redirect to="/login" />
            
        }
            
        </>
    )
}

export default FriendsList