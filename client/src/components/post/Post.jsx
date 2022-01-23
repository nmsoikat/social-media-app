import { MoreVert } from '@mui/icons-material';
import './post.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {format}  from 'timeago.js'

export default  function Post({ post }) {

  const [like, setLike] = useState(post.likes.length)
  const [isLike, setIsLike] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async() => {
      const res = await axios.get(`/users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser();
  }, [])

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1)
    setIsLike(!isLike);
  }

  return <div className='post'>
    <div className="post-wrapper">
      <div className="post-top">
        <div className="post-top-left">
          <img className='post-profile-img' src={user.profilePicture || 'assets/person/noAvatar.png'}  alt="" />
          <span className="post-username">{user.username}</span>
          <span className="post-date">{format(post.createdAt)}</span>
        </div>
        <div className="post-top-right">
          <MoreVert className='post-option-icon' />
        </div>
      </div>
      <div className="post-center">
        <span className="post-text">{post?.desc}</span>
        <img className='post-img' src={post.photo}  alt=""/>
      </div>
      <div className="post-bottom">
        <div className="post-bottom-left">
          <img className='post-like-icon' src="/assets/like.png" alt="like" onClick={likeHandler}  />
          <img className='post-like-icon' src="/assets/heart.png" alt="heart" onClick={likeHandler}  />
          <span className="post-like-count">{like} people like it</span>
        </div>
        <div className="post-bottom-right">
          <span className="post-comment-text">{post.comment} comments</span>
        </div>
      </div>
    </div>
  </div>;
}
