import { Post } from "../types/types"

type Props = {
    post: Post
}

const PostCard: React.FC<Props> = ({post}) => {
  return (
    <div>
        <h3>{post.id} - {post.title}</h3>
        <p>User: {post.userId}</p>
        <p>{post.body}</p>
    </div>
  )
}

export default PostCard