import React from 'react'
import CreateChatRoom from './CreateChatRoom'
import ChatRoomList from './ChatRoomList'

const ChatPanel = () => {
  return (
    <div>
      <CreateChatRoom/>
      <ChatRoomList/>
    </div>
  )
}

export default ChatPanel
