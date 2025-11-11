'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import './Navbar.css'


// Importa el icono de menú que creamos anteriormente
/* import { MenuIcon } from './MenuIcon'; */
//import { CloseIcon } from './CloseIcon'; // Necesitarás un icono de 'X' para cerrar

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




const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Primera línea diagonal (de arriba a la izquierda a abajo a la derecha) */}
        <line x1="18" y1="6" x2="6" y2="18" />
        {/* Segunda línea diagonal (de arriba a la derecha a abajo a la izquierda) */}
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const Navbar = () => {
    // 1. Estado para controlar si el menú móvil está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <nav className="navbar-container">
            {/* --- Encabezado de la barra de navegación (Visible siempre) --- */}
            <div className="navbar-header">
                <Link href="/" className="logo-link">
                    Mi Logo
                </Link>
                {/* Botón de Hamburguesa (Visible solo en móvil) */}
                <button className="menu-button" onClick={toggleMenu} aria-expanded={isOpen}>
                    {isOpen ? <CloseIcon className="icon-style" /> : <MenuIcon className="icon-style" />}
                </button>



            </div>

            {/* --- Contenedor de Enlaces (Visibilidad controlada por CSS y Estado) --- */}
            <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
                <Link
                    href="/"
                    onClick={toggleMenu}
                    className={pathname === '/' ? 'active-link' : 'nav-link'}>
                    <HomeIcon />
                    Inicio
                </Link>
                <Link
                    href="/guardados"
                    onClick={toggleMenu}
                    className={pathname === '/guardados' ? 'active-link' : 'nav-link'}>
                    <SavedIcon />
                    Guardados
                </Link>
                <Link
                    href="/explorar"
                    onClick={toggleMenu}
                    className={pathname === '/explorar' ? 'active-link' : 'nav-link'}>
                    <ExploreIcon />
                    Explorar
                </Link>
                <Link
                    href="/mensajes"
                    onClick={toggleMenu}
                    className={pathname === '/mensajes' ? 'active-link' : 'nav-link'}>
                    <MessagesIcon />
                    Mensajes
                </Link>
                <Link
                    href="/notificaciones"
                    onClick={toggleMenu}
                    className={pathname === '/notificaciones' ? 'active-link' : 'nav-link'}>
                    <NotificationsIcon />
                    Notificaciones
                </Link>
                <Link
                    href="/perfil"
                    onClick={toggleMenu}
                    className={pathname === '/perfil' ? 'active-link' : 'nav-link'}>
                    <ProfileIcon />
                    Perfil
                </Link>
                <Link
                    href="/seguidores"
                    onClick={toggleMenu}
                    className={pathname === '/seguidores' ? 'active-link' : 'nav-link'}>
                    <FollowersIcon />
                    Seguidores
                </Link>
                <Link
                    href="/seguidos"
                    onClick={toggleMenu}
                    className={pathname === '/seguidos' ? 'active-link' : 'nav-link'}>
                    <FollowingIcon />
                    Seguidos
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;