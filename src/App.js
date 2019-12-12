import React, { useState, useEffect } from "react"
import API from "./adapters/API"
import "./App.css"
import PostCard from "./components/PostCard"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    API.getPosts().then(resp => setPosts(resp.slice(0, 10))) // stores first 10 posts in state
  }, [])

  return (
    <div>
      <h1>Look at all these posts!</h1>

      <div id="posts-container">
        {posts.length > 0
          ? posts.map(post => <PostCard {...{post}}/>)
          : "Loading posts"}
      </div>
    </div>
  )
}

export default App
