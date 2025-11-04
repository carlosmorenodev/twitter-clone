import React from 'react'

import styles from './page.module.css'


const notifications = [
  {
    type: 'like',
    user: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?u=alicej",
    content: "Le ha gustado tu tuit: \"¡Qué gran día para programar!\"",
  },
  {
    type: 'retweet',
    user: "Bob Brown",
    avatar: "https://i.pravatar.cc/150?u=bobb",
    content: "Ha retuiteado tu tuit: \"¡Next.js es increíble!\"",
  },
  {
    type: 'follow',
    user: "Charlie Green",
    avatar: "https://i.pravatar.cc/150?u=charlieg",
    content: "Ha comenzado a seguirte.",
  },
  {
    type: 'mention',
    user: "David Black",
    avatar: "https://i.pravatar.cc/150?u=davidb",
    content: "Te ha mencionado en un tuit: \"¡Hola @username!\"",
  },
];


const LikeIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="#FF007F" fill="#FF007F"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>;
const RetweetIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="#00C47F"><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.293.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.293.294-.767 0-1.06zM.23 8.33c.292.293.767.293 1.06 0l2.22-2.22V16.35c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-5.85c-1.24 0-2.25-1.01-2.25-2.25V3.86l2.22 2.22c.293.293.768.293 1.06 0s.293-.768 0-1.06l-3.5-3.5c-.145-.147-.337-.22-.53-.22s-.383.072.53.22l-3.5 3.5c-.294.293-.294-.767 0 1.06z"></path></svg>;
const FollowIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="#1DA1F2"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>;
const MentionIcon = () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="#8B5CF6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8H4zm8 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>;

const notificacionesPage = () => {


  const getIcon = (type) => {
    switch (type) {
      case 'like': return <LikeIcon />;
      case 'retweet': return <RetweetIcon />;
      case 'follow': return <FollowIcon />;
      case 'mention': return <MentionIcon />;
      default: return null;
    }
  }


  return (
    <div className={styles.notificationContainer}>
      <header className={styles.notificationHeader}>Notificaciones</header>
      <ul className={styles.notificationList}>
        {notifications.map((notification) => (
          <li className={styles.notification} key={notification.index}>
            <div>{getIcon(notification.type)}</div>
            <div className={styles.notificationAvatar}>
              <img src={notification.avatar} alt="" />
            </div>
            <div>
              <strong>{notification.user}</strong> {notification.content}
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default notificacionesPage