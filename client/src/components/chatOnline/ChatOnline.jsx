import './chatOnline.css'

function ChatOnline() {
  return (
    <div className='chat-online'>
      <div className="chat-online-friend">
        <div className="chat-online-img-container">
          <img className='chat-online-img' src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
          <div className="chat-online-badge"></div>
        </div>
        <span className="chat-online-name">John Doe</span>
      </div>
    </div>
  )
}

export default ChatOnline