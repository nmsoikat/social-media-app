import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post';
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import io from 'socket.io-client';

const socket = io();

export default function Feed({ username }) {

  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ?
        await axios.get(`/posts/profile/${username}`) :
        await axios.get(`/posts/timeline/${user._id}`)
      setPosts(res.data)
    }
    fetchPosts();
  }, [username, user._id])

  const newPostCreated = (data) => {
    // console.log(data);
  }

  socket.on('post-created', newPostCreated)

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
