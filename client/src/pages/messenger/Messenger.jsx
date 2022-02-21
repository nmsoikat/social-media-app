import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversation/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios'

function Messenger() {
  const [conversations, setConversations] = useState([])
  //select user from left bar
  const [currentChat, setCurrentChat] = useState(null)

  //find conversation according current-conversation
  const [messages, setMessages] = useState([])


  const { user } = useContext(AuthContext)

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await axios.get('/conversation/' + user._id)
        setConversations(data)
      } catch (err) {
        console.log(err);
      }
    }

    getConversation()
  }, [])

  useEffect(() => {
    const getMessage = async () => {
      try {
        const { data } = await axios.get('/message/' + currentChat?._id);
        setMessages(data)
      } catch (err) {
        console.log(err);
      }
    }

    getMessage()
  }, [currentChat])
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input type="text" placeholder="search for friends" className="chat-menu-input" />
            {conversations.map(c =>
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            )}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            {
              currentChat ?
                (<>
                  <div className="chat-box-top">
                    {messages.map(m => <Message message={m} own={m.sender === user._id} currentUser={user} />)}
                  </div>
                  <div className="chat-box-bottom">
                    <textarea cols="30" rows="10" className="chat-message-input" placeholder="write something..."></textarea>
                    <button className="chat-submit-btn">Send</button>
                  </div>
                </>) : (<p className="no-conversation-text">Open a conversation to start chat</p>)
            }
          </div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger