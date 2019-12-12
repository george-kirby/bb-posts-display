import React, { useState, useEffect } from "react"
import API from "./adapters/API"
import "./App.css"
import PostCard from "./components/PostCard"

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    API.getUsers().then(resp => {
      setUsers(resp)
      API.getPosts().then(resp => setPosts(resp.slice(0, 10))) // stores first 10 posts in state
    })
  }, [])

  return (
    <div>
      <h1>Look at all these posts!</h1>

      <div id="posts-container">
        {posts.length > 0
          ? posts.map(post => <PostCard {...{post}} user={users.find(user => user.id === post.userId)}/>)
          : "Loading posts"}
      </div>
    </div>
  )
}

export default App
