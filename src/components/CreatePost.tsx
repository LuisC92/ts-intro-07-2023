import {useState} from 'react'
import {v4 as uuid} from "uuid"
import { Post } from '../types/types'

interface Props {
    handleCreatePost: (newPost:Post) => void 
}

interface temPost {
    title?: string,
    body?:string
}

const CreatePost:React.FC<Props> = ({handleCreatePost}) => {

    const [tempPost, setTempPost] = useState<temPost>({})

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>) => {
        setTempPost({...tempPost, [event.target.name]:event.target.value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newPost: Post ={
            title: tempPost.title,
            body:tempPost.body,
            id: uuid(),
            userId: 1
        }
        handleCreatePost(newPost)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='title'>Title:</label>
            <input name="title" type='text' onChange={handleChange}/>
        </div> 
        <div>
            <label htmlFor='body'>Body:</label>
            <input name="body" type='text' onChange={handleChange}/>
        </div> 
        <button type='submit'>Create Post</button>
    </form>
  )
}

export default CreatePost