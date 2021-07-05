export default function Post ({post}){
    return(
        <div>
            <hr/>
            <p>User ID: {post.userId}</p>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    )
}