import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Coments () {



    let  [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setUsersList(value)
            });
    }, []);

    return(
        <div>
            {
                usersList.map(value => <Comment item={value}/>)
            }
        </div>
    )
}