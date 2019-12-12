import React, { useState, useEffect } from 'react';
import API from './adapters/API'
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetches posts and stores in state
    API.getPosts()
    .then(console.log)
  }, []);

  return (
    <div>
      <h1>Look at all these posts!</h1>
    </div>
  );
}

export default App;
