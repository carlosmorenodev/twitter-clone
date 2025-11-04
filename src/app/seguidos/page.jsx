import React from 'react'

import { following } from '@/lib/following'
import { UserCard } from '@/components/UserCard'

import styles from './page.module.css'

const seguidosPage = () => {
  return (
    <>
      <div className={styles.followingContainer}>
        <header className={styles.followingTitle}>
          Personas que te siguen
        </header>
        <div className={styles.userGrid}>
          {following.map((user) => (
            <UserCard key={user.id} user={user} actionText="No seguir" />
          ))}
        </div>
      </div>

    </>
  )
}

export default seguidosPage