import {useEffect} from "react";
export default function Coments(){



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                console.log(value)
            })
    }, [])
    return(
        <div>
            Кометы
        </div>
    )
}