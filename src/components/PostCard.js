import React, { useState } from "react"
import "../stylesheets/PostCard.css"
import PostComments from "./PostComments"

const PostCard = ({ post, user, comments }) => {
  const [selected, setSelected] = useState(false)

  const toggleSelected = () => setSelected(!selected)

  return (
    <div onClick={toggleSelected} className="post-card" key={`post-${post.id}`}>
      <h4>{post.title}</h4>
      <div>{post.body}</div>
      <h6>by {user.name}</h6>
      <PostComments onClick={toggleSelected} {...{ selected, comments }}/>
    </div>
  )
}

export default PostCard
