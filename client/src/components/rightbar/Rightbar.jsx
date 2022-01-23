import './rightbar.css';
import { Users } from '../../dummyData'
import OnlineFriend from '../onlineFriend/OnlineFriend';

export default function Rightbar({ user }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-img" src="/assets/gift.png"  alt="" />
          <span className="birthday-text">
            <b>Pola Foster</b> and  <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src="/assets/ad.png"  alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map(u => (
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
            <span className="rightbar-info-value">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married": "--"}</span>
          </div>
        </div>

        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img className='rightbar-following-img' src="/assets/person/1.jpeg"   alt=""/>
            <span className="rightbar-following-name">John</span>
          </div>
          <div className="rightbar-following">
            <img className='rightbar-following-img' src="/assets/person/1.jpeg"   alt=""/>
            <span className="rightbar-following-name">John</span>
          </div>
          <div className="rightbar-following">
            <img className='rightbar-following-img' src="/assets/person/1.jpeg"  alt="" />
            <span className="rightbar-following-name">John</span>
          </div>
          <div className="rightbar-following">
            <img className='rightbar-following-img' src="/assets/person/1.jpeg"  alt="" />
            <span className="rightbar-following-name">John</span>
          </div>
          <div className="rightbar-following">
            <img className='rightbar-following-img' src="/assets/person/1.jpeg"  alt="" />
            <span className="rightbar-following-name">John</span>
          </div>
          <div className="rightbar-following">
            <img className='rightbar-following-img' src="/assets/person/1.jpeg"  alt="" />
            <span className="rightbar-following-name">John</span>
          </div>
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
