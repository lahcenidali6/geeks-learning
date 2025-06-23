import React from 'react'
import posts from "./data.json"
export default function PostList() {
  return (
    <div>
        {
            posts.map(post=>{
                return (<div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>)
            })
        }
    </div>
  )
}
