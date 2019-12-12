import React, { useState } from "react"
import '../stylesheets/PostCard.css'

const PostCard = ({ post, user }) => {
  const [selected, setSelected] = useState(false)

  const toggleSelected = () => setSelected(!selected)

  return (
    <div onClick={toggleSelected} className="post-card" key={`post-${post.id}`}>
      <h4>{post.title}</h4>
        <div>by {user.name}</div>
      <dialog onClick={toggleSelected} open={selected}>
        <div>{post.body}</div>
      </dialog>
    </div>
  )
}

export default PostCard
