import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversation/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { useContext, useEffect, useState, useRef } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios'
import {io} from "socket.io-client"

function Messenger() {
  const [conversations, setConversations] = useState([])
  //select user from left bar
  const [currentChat, setCurrentChat] = useState(null)

  //find conversation and set according current-chat
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("");

  //get ref of new message element 
  const newMessageRef = useRef();

  //socket
  const [socket, setSocket] = useState(null)

  const { user:currentUser } = useContext(AuthContext)

  useEffect(() => {
    // it is not http
    // it is web socket
    setSocket(io('ws://localhost:8900')) //set socket server url

  }, [])

  useEffect(() => {
    socket?.on("welcome", message => {
      console.log(message);
    })
  },  [socket])

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await axios.get('/conversation/' + currentUser._id)
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

  const newMessageHandler = async(e) => {
    e.preventDefault()
    const message = {
      sender: currentUser._id,
      text: newMessage,
      conversationId: currentChat._id
    }

    try {
      //same to db
      const {data} = await axios.post("/message", message);//return created data

      setMessages([...messages, data]) // frontend dom update

      setNewMessage(""); //reset text box
    } catch (error) {
      console.log(error);
    }
  }

  // scroll to new message 
  // why useEffect here, so this can apply when message load or create
  useEffect(() => {
    // need reference to show this element
    newMessageRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input type="text" placeholder="search for friends" className="chat-menu-input" />
            {conversations.map((c,index) =>
              <div key={index} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={currentUser} />
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
                    {messages.map((m,index) => 
                    (
                      <div key={index} ref={newMessageRef}>
                        <Message message={m} own={m.sender === currentUser._id} currentUser={currentUser} />
                      </div>
                    )
                    )}
                  </div>
                  <div className="chat-box-bottom">
                    <textarea cols="30" rows="10" className="chat-message-input" placeholder="write something..." value={newMessage} onChange={(e)=> setNewMessage(e.target.value)}></textarea>
                    <button className="chat-submit-btn" onClick={newMessageHandler}>Send</button>
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