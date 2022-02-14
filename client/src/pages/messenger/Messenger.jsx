import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'

function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            Menu
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            Message
          </div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">
            online
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger