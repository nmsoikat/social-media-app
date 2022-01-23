import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post';
import axios from 'axios'
import { useState, useEffect } from 'react';


export default function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get('/posts/timeline/61ecda255029bbf23a8915b8')
      setPosts(res.data)
    }
    fetchPosts();
  }, [])

  return <div className='feed'>
    <div className="feed-wrapper">
      <Share />
      {
        posts.map(p => (
          <Post key={p._id} post={p} />
        ))
      }
    </div>
  </div>;
}
