export default function User ({item, getUserPosts}){
    return(
        <div>
            <div>{item.name} - <button onClick={()=>{
                getUserPosts(item.id)
            }}>Get user posts</button></div>
        </div>
    )
}