'use client'

import React, { useState } from 'react'

import styles from './page.module.css'


const messages = [
  {
    id: 1,
    user: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?u=alicej",
    lastMessage: "¡Hola! ¿Cómo estás?",
    timestamp: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    user: "Bob Brown",
    avatar: "https://i.pravatar.cc/150?u=bobb",
    lastMessage: "Nos vemos mañana.",
    timestamp: "Ayer",
  },
  {
    id: 3,
    user: "Charlie Green",
    avatar: "https://i.pravatar.cc/150?u=charlieg",
    lastMessage: "Perfecto, ¡gracias!",
    timestamp: "Hace 2 días",
  },
]

const mensajesPage = () => {

  const [selectedChat, setSelectedChat] = useState(messages[0]);

  const handleSelectedChat = (msg) => {
    setSelectedChat(msg);
  }


  return (
    <div className={styles.msgContainer}>

      <div className={styles.msgCardsContainer}>
        <h2 className={styles.msgTitle}>Mensajes</h2>
        {messages.map((msg) => (
          <div className={styles.msgCard} key={msg.id} onClick={() => handleSelectedChat(msg)}>
            <img className={styles.msgAvatar} src={msg.avatar} alt={msg.user} />
            <div className={styles.msgContent}>
              <div className={styles.msgUser}>{msg.user}</div>
            </div>

            {msg.unread > 0 && <span className={styles.msgUnread}>{msg.unread}</span>}
          </div>
        ))}

      </div>

      <div className={styles.chatPanel}>
        {selectedChat ? (
          <>
            <header className={styles.chatHeader}>

              <img className={styles.chatAvatar} src={selectedChat.avatar} alt="" />
              <div className={styles.chatUser}>{selectedChat.user}</div>
            </header>
            <div className={styles.lastMessage}>
              {selectedChat.lastMessage}
            </div>
          </>
        ) : (
          <div>Selecciona un mensaje</div>
        )}
        <div className={styles.chatInputContainer}>
          <input type="text" className={styles.chatInput} />
        </div>
      </div>
    </div>
  )
}

export default mensajesPage