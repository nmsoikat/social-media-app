import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversation/Conversation"
import Message from "../../components/message/Message"

function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input type="text" placeholder="search for friends" className="chat-menu-input" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own={true}/>
              <Message />
              <Message />
              <Message own={true}/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message own={true}/>
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chat-box-bottom">
              <textarea cols="30" rows="10" className="chat-message-input" placeholder="write something..."></textarea>
              <button className="chat-submit-btn">Send</button>
            </div>
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