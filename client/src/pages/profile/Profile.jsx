import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className='profile-cover-img' src="/assets/post/1.jpeg" alt="" />
              <img className='profile-user-img' src="/assets/person/7.jpeg" alt="" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Nur Mohammad</h4>
              <p className="profile-info-desc">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
