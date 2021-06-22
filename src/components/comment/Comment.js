import {useEffect, useState} from 'react';

export default function Comment() {


    let [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setUsersList(value);
            });
    }, []);

    return (

        <div>
            {
                usersList
                    .map(value => <div>{value.id} - {value.name}</div>)

            }

        </div>
    );
}