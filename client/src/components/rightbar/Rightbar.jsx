import './rightbar.css';
import OnlineFriend from '../onlineFriend/OnlineFriend';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id)
        console.log(friendList.data);
        setFriends(friendList.data)
      } catch (err) {
        console.log(err);
      }
    }

    getFriends();
  }, [user._id])

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-img" src="/assets/gift.png" alt="" />
          <span className="birthday-text">
            <b>Pola Foster</b> and  <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src="/assets/ad.png" alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {user.map(u => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "--"}</span>
          </div>
        </div>

        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          {
            friends.map(friend => (
              <Link to={`/profile/${friend.username}`} style={{textDecoration: 'none'}}>
              <div className="rightbar-following">
                <img className='rightbar-following-img' src={`${(friend.profilePicture && PF + friend.profilePicture) || PF + '/person/noAvatar.png'}`} alt="" />
                <span className="rightbar-following-name">{friend.username}</span>
              </div>
              </Link>
            ))
          }
        </div>
      </>
    )
  }

  return <div className='rightbar'>
    <div className="rightbar-wrapper">
      {
        user ?
          <ProfileRightbar />
          :
          <HomeRightbar />
      }
    </div>
  </div>;
}
