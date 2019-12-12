import React, { useState, useEffect } from "react"
import API from "./adapters/API"
import "./App.css"
import PostCard from "./components/PostCard"

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    API.getUsers().then(resp => {
      setUsers(resp)
      API.getPosts().then(resp => {
        setPosts(resp)
        API.getComments().then(setComments)
      })
    })
  }, [])

  return (
    <div>
      <h1>Here are the posts by our wonderful users!</h1>

      <div id="posts-container">
        {posts.length > 0
          ? posts.map(post => (
              <PostCard
                {...{ post }}
                user={users.find(user => user.id === post.userId)}
                comments={comments.filter(comment => comment.postId === post.id)}
              />
            ))
          : "Loading posts"}
      </div>
    </div>
  )
}

export default App
