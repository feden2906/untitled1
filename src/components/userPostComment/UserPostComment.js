export default function UserPostComment ({post}){
    return(
        <div>
            <div> {post.id} - {post.body}</div>
        </div>
    )
}