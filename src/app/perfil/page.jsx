import React from 'react'

import { tweets } from '../../lib/data';

const userProfile = {
  name: "Tu Nombre",
  username: "@tunombre",
  avatar: "https://i.pravatar.cc/150?u=profile",
  coverImage: "https://picsum.photos/seed/profile/1200/400",
  bio: "Desarrollador Web Apasionado | Amante de Next.js | Creador de Experiencias Digitales",
  following: 123,
  followers: 456,
};

const perfilPage = () => {

  const userTweets = tweets.filter(tweet => tweet.username === "@Bret").slice(0, 2); // Simular tuits del usuario

  const pageStyles = {
    color: 'white',
    minHeight: '100vh'
  };

  const headerStyles = {
    position: 'relative',
    height: '200px',
    backgroundColor: '#1E1E1E',
    zIndex: 1
  };

  const coverImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    
  };

  const profileInfoStyles = {
    padding: '16px',
    borderBottom: '1px solid #2c2c2c',
  };

  const avatarStyles = {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    border: '4px solid #121212',
    marginTop: '-80px',
    position: 'relative',
    zIndex: 2
  };

  const followButtonStyles = {
    float: 'right',
    padding: '8px 16px',
    border: '1px solid #BB86FC',
    borderRadius: '9999px',
    color: '#BB86FC',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  const tweetListStyles = {
    listStyle: 'none',
    padding: 0,
  };

  const tweetItemStyles = {
    display: 'flex',
    padding: '16px',
    borderBottom: '1px solid #2c2c2c',
  };

  const tweetAvatarStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '12px',
  };

  return (
    <div style={pageStyles}>
      <div style={headerStyles}>
        <img src={userProfile.coverImage} alt="Cover image" style={coverImageStyles} />
      </div>

      <div style={profileInfoStyles}>
        <img src={userProfile.avatar} alt="Avatar" style={avatarStyles} />
        
        <button style={followButtonStyles}>Editar Perfil</button>

        <h2 style={{ margin: '16px 0 0' }}>{userProfile.name}</h2>
        <p style={{ color: 'var(--color-muted-foreground)', margin: 0 }}>{userProfile.username}</p>
        <p style={{ margin: '16px 0' }}>{userProfile.bio}</p>

        <div style={{ display: 'flex', gap: '20px', color: 'var(--color-muted-foreground)' }}>
          <span><strong>{userProfile.following}</strong> Siguiendo</span>
          <span><strong>{userProfile.followers}</strong> Seguidores</span>
        </div>
      </div>

      {/* Timeline del usuario */}
      <ul style={tweetListStyles}>
        {userTweets.map(tweet => (
          <li key={tweet.id} style={tweetItemStyles}>
            <img src={tweet.avatar} alt={tweet.user} style={tweetAvatarStyles} />
            <div style={{ flexGrow: 1 }}>
              <strong>{tweet.user}</strong> <span style={{ color: 'var(--color-muted-foreground)' }}>{tweet.username}</span>
              <p>{tweet.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default perfilPage