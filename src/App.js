import React, { useState, useEffect } from "react"
import API from "./adapters/API"
import "./App.css"

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
          ? posts.map(post => {
              return (
                <div className="post-card">
                  <h4>{post.title}</h4>
                  <div>{post.body}</div>
                </div>
              )
            })
          : "Loading posts"}
      </div>
    </div>
  )
}

export default App
