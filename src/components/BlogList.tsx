type Props = {
    posts: Post[];
}
function BlogList({posts} : Props) {
    console.log(posts.length);
    return (
        <div>
            BlogList
            <br/>
            Post Titles:
            {posts.map((post)=>{
                return <p>{post.title}</p>
            })}
        </div>
    )
}

export default BlogList
