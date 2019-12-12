import React, { useState } from "react"

const PostCard = ({ post }) => {
  const [selected, setSelected] = useState(false)

  const toggleSelected = () => setSelected(!selected)

  return (
    <div onClick={toggleSelected} className="post-card" key={`post-${post.id}`}>
      <dialog onClick={toggleSelected} open={selected}>Hello</dialog>
      <h4>{post.title}</h4>
      <div>{post.body}</div>
    </div>
  )
}

export default PostCard
