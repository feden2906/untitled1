export default function Comment (props){
    let {item:value} = props
    return(
        <div>{value.postId} - {value.id} - {value.name}</div>
    )
}
