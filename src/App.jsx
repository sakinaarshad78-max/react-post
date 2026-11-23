
import { useState, useEffect } from 'react';
import { PostCard } from './components/PostCard.jsx';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
  <div className="container my-4">
    <h1 className="text-center mb-4">Posts</h1>

    <div className="row">
      {posts.map(item => (
        <div className="col-md-4 mb-4" key={item.id}>
          <PostCard item={item} />
        </div>
      ))}
    </div>
  </div>
);
}

export default App;