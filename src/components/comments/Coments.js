import {useEffect, useState} from "react";

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
                usersList.map(value => <div>{value.id}-{value.name}</div>)
            }
        </div>
    )
}