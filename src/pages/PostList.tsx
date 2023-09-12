import {useEffect, useState} from 'react'
import {Post} from "../types/types"
import PostCard from '../components/PostCard'
import CreatePost from '../components/CreatePost'

const PostList: React.FC = () => {

    const [data, setData] = useState<Post[]>([])

    const fetchPosts = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((data:Post[]) => {
                setData(data)
            })
    }

    const handleCreatePost =(newPost: Post)=>{
        setData((prevData)=>[...prevData, newPost])
    }

    useEffect(()=>{
        fetchPosts()
    },[])

  return (
    <div>
        <h1>Post List</h1>
        <CreatePost handleCreatePost={handleCreatePost} />
        {data ? data.map(post => (<PostCard key={post.id} post={post} />)) : <h1>Loading</h1>}    
    </div>
  )
}

export default PostList