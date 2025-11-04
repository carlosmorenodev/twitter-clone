'use client';

import { useState } from 'react';
import Image from 'next/image';

const ImageIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export function CreateTweet({ onPostTweet }) {
  const [tweetContent, setTweetContent] = useState('');

  const handlePost = () => {
    if (tweetContent.trim()) {
      onPostTweet(tweetContent);
      setTweetContent('');
    }
  };

  return (
    <div className="create-tweet-container">
      <div className="create-tweet-input-section">
        <div className="user-avatar-container">
           <Image
              src="https://i.pravatar.cc/48"
              alt="Tu avatar"
              width={48}
              height={48}
              className="user-avatar"
            />
        </div>
        <textarea
          className="create-tweet-textarea"
          placeholder="¿Qué está pasando?"
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        />
      </div>
      <div className="create-tweet-actions">
        <div className="action-icons">
            <button className="icon-button">
                <ImageIcon className="action-icon" />
            </button>
        </div>
        <button className="button button-primary" onClick={handlePost}>
          Publicar
        </button>
      </div>
    </div>
  );
}
