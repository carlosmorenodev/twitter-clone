import React from 'react'

const Footer = () => {

    const FooterStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '20px'
    }

    const FooterLinksStyles = {
       display: 'flex',
       gap: '10px'
    }

    const FooterLinkStyles = {
        textDecoration: 'none',
        color: 'white'
    }

    const FooterCopyStyles = {
        color: 'white',
    }

    return (
        <footer style={FooterStyles}>
            <div style={FooterLinksStyles}>
                <a href="#" style={FooterLinkStyles}>Acerca de</a>
                <a href="#" style={FooterLinkStyles}>Centro de Ayuda</a>
                <a href="#" style={FooterLinkStyles}>Términos de Servicio</a>
                <a href="#" style={FooterLinkStyles}>Política de Privacidad</a>
                <a href="#" style={FooterLinkStyles}>Política de Cookies</a>
            </div>
            <div style={FooterCopyStyles}>
                &copy; {new Date().getFullYear()} Tu App Social, Inc.
            </div>
        </footer>
    )
}

export default Footer