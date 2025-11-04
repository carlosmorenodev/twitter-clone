'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Sidebar.module.css'


// SVG Icon Components
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ExploreIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 14.5 21 21" />
    <path d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
  </svg>
);

const NotificationsIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const MessagesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SavedIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

const ProfileIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FollowingIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

const FollowersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <a href="/" className={styles.sidebarLogo}>Logo</a>
        <nav className={styles.sidebarNav}>
          <Link
            href="/"
            className={pathname === '/' ? styles.activeLink : styles.navLink}
          >
            <HomeIcon className={styles.icon} />
            Inicio
          </Link>
          <Link
            href="/guardados"
            className={pathname === '/guardados' ? styles.activeLink : styles.navLink}
          >
            <SavedIcon className={styles.icon} />
            Guardados
          </Link>
          <Link
            href="/explorar"
            className={pathname === '/explorar' ? styles.activeLink : styles.navLink}
          >
            <ExploreIcon className={styles.icon} />
            Explorar
          </Link>
          <Link
            href="/mensajes"
            className={pathname === '/mensajes' ? styles.activeLink : styles.navLink}
          >
            <MessagesIcon className={styles.icon} />
            Mensajes
          </Link>
          <Link
            href="/notificaciones"
            className={pathname === '/notificaciones' ? styles.activeLink : styles.navLink}
          >
            <NotificationsIcon className={styles.icon} />
            Notificaciones
          </Link>
          <Link
            href="/perfil"
            className={pathname === '/perfil' ? styles.activeLink : styles.navLink}
          >
            <ProfileIcon className={styles.icon} />
            Perfil
          </Link>
          <Link
            href="/seguidores"
            className={pathname === '/seguidores' ? styles.activeLink : styles.navLink}
          >
            <FollowersIcon className={styles.icon} />
            Seguidores
          </Link>
          <Link
            href="/seguidos"
            className={pathname === '/seguidos' ? styles.activeLink : styles.navLink}
          >
            <FollowingIcon className={styles.icon} />
            Seguidos
          </Link>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar