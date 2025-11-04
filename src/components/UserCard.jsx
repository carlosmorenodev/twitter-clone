import Image from 'next/image';

import styles from './UserCard.module.css'

export function UserCard({ user, actionText = "Seguir" }) {
  return (
    
      <div className={styles.userCard}>
        <div className={styles.userInfo}>
          <Image
            src={user.avatar}
            alt={`${user.user}'s avatar`}
            width={48}
            height={48}
            className={styles.userAvatar}
          />
          <div className={styles.userDetails}>
            <span className={styles.name}>{user.user}</span>
            <span className={styles.username}>{user.username}</span>
          </div>
        </div>
        <button className={`${styles.button} ${styles.buttonSecondary}`}>{actionText}</button>
      </div>

    
  );
}