import React from 'react'

import styles from './page.module.css'

import { followers } from '@/lib/followers'
import { UserCard } from '@/components/UserCard'

const seguidoresPage = () => {



  return (

    <>
      <div className={styles.followersContainer}>
        <header className={styles.followersTitle}>
          Personas que te siguen
        </header>
        <div className={styles.userGrid}>
          {followers.map((user) => (
            <UserCard key={user.id} user={user} actionText="Seguir" />
          ))}
        </div>
      </div>

    </>
  )
}

export default seguidoresPage