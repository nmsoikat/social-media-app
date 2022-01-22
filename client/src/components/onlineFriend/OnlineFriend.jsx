import './onlineFriend.css';

function OnlineFriend({ user }) {
  return <li className="rightbar-friend">
    <div className="rightbar-profile-img-container">
      <img className='rightbar-profile-img' src={user.profilePicture}  alt=""/>
      <span className="rightbar-online"></span>
    </div>
    <span className="rightbar-profile-name">{user.username}</span>
  </li>;
}

export default OnlineFriend;
