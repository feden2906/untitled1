export default function Comment (props){
    let {item:value} = props
    return(
        <div>postID {value.postId} - id {value.id} - comment: {value.name}</div>
    )
}
