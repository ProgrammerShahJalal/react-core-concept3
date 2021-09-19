import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadPost></LoadPost>
    </div>
  );
}
function LoadPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])


  return (
    <div>
      <h2>Load Posts</h2>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props) {
  return (
    <div style={{ color: 'white', margin: "35px", backgroundColor: 'darkblue', borderRadius: '25px', padding: '10px' }}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handlerIncrease = () => setCount(count + 1);
  const handlerDecrease = () => setCount(count - 1);
  const clear = () => setCount(count - count);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
export default App;
