export default function Comment ({comment}){
    return(
        <div>
            <div>{comment.id} - {comment.body}</div>
        </div>
    )
}