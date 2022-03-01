import axios from 'axios'
import { useEffect, useState } from 'react'
import './chatOnline.css'

function ChatOnline({onlineUsers, currentUserId, setCurrentChat}) {
  const [friends, setFriends] = useState([])
  const [onlineFriends, setOnlineFriends] = useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   const getFriends = async () => {
  //     const res = await axios.get("/users/friends/"+ currentUserId)
  //     setFriends(res.data)
  //   }

  //   getFriends()

  // }, [currentUserId])

  // useEffect(()=> {
  //   setOnlineFriends(onlineFriends.filter((f) => onlineUsers.includes(f._id)))
  // }, [friends, onlineUsers])
  
  return (
    <div className='chat-online'>
      {
        // onlineFriends.map(o => (
        <div className="chat-online-friend">
          <div className="chat-online-img-container">
            {/* <img className='chat-online-img' src={o?.profilePicture ? PF+o.profilePicture : PF+ "person/noAvatar.png"} alt="" /> */}
            <div className="chat-online-badge"></div>
          </div>
          {/* <span className="chat-online-name">{o?.username}</span> */}
        </div>
        // ))
      }
    </div>
  )
}

export default ChatOnline