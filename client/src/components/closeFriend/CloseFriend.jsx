import "./closeFriend.css";

export default function CloseFriend({user}) {
  return  <li className="sidebar-friend-item">
  <img src={user.profilePicture} alt="" className="sidebar-friend-img" />
  <span className="sidebar-friend-name">{user.username}</span>
</li>;
}
