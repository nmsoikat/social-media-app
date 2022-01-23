import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post';
import axios from 'axios'
import { useState, useEffect } from 'react';


export default function Feed({ username }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ?
        await axios.get(`/posts/profile/${username}`) :
        await axios.get('/posts/timeline/61ecf55f1a55cb422357c3b3')
      setPosts(res.data)
    }
    fetchPosts();
  }, [username])

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
