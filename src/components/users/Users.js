import User from "../user/User";
import {getUsers, getUsersPost} from "../../service/api/API"
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Users (){

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        getUsers().then(response =>{
            setUsers(response.data)
        })
    })
    function getUserPosts(id) {
        getUsersPost(id).then(value =>{
            setPosts(value.data)


        })
    }

    return(
        <div>
            {
                users.map(user => <User getUserPosts={getUserPosts} item={user} key={user.id}/> )

            }

        </div>
    )
}