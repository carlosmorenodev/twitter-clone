'use client'

import Image from "next/image";
import styles from "./page.module.css";



import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
  FaRegChartBar,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";


import { tweets as initialTweets } from '../lib/data';

import { CreateTweet } from "@/components/CreateTweet";
import { useState } from "react";

export default function Home() {

  const [tweets, setTweets] = useState(initialTweets);

  const handlePostTweet = (tweetContent) => {
    const newTweet = {
      id: new Date().getTime(),
      user: "Usuario de Demo",
      username: "@demouser",
      avatar: "https://i.pravatar.cc/48?u=demouser",
      content: tweetContent,
      comments: 0,
      retweets: 0,
      likes: 0,
      saves: 0,
      stats: 0,
      shares: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <>
    <CreateTweet onPostTweet={handlePostTweet} />
      {
        tweets.map((tweet) => (

          <div className={styles.tweetCard} key={tweet.id}>
            <Image className={styles.tweetAvatar} src={tweet.avatar} alt="alt" width={60} height={60} />
            <div className={styles.tweetCardInfo}>
              <div className={styles.tweetContent}>
                <div className={styles.userDetails}>
                  <span className={styles.name}>{tweet.user}</span>
                  <span className={styles.username}>{tweet.username}</span>
                </div>
                <p className={styles.tweetContent}>{tweet.content}</p>
                {tweet.image && (
                  <Image src={tweet.image} alt="alt" width={600} height={400} />
                )}

              </div>
              <div className={styles.tweetActions}>
                <div className={styles.tweetAction}>
                  <FaRegComment className="icon" />
                  <span>{tweet.comments}</span>
                </div>
                <div className={styles.tweetAction}>
                  <FaRetweet className={styles.icon} />
                  <span>{tweet.retweets}</span>
                </div>
                <div className={styles.tweetAction}>
                  <FaRegHeart className={styles.icon} />
                  <span>{tweet.likes}</span>
                </div>
                <div className={styles.tweetAction}>
                  <FaRegBookmark className={styles.icon} />
                  <span>{tweet.saves}</span>
                </div>
                <div className={styles.tweetAction}>
                  <FaRegChartBar className={styles.icon} />
                  <span>{tweet.stats}</span>
                </div>
                <div className={styles.tweetAction}>
                  <FiShare className={styles.icon} />
                  <span>{tweet.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </>
  );
}


/* 'use client';

import { useState } from 'react';
import { tweets as initialTweets } from "../lib/data";
import Image from "next/image";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
  FaRegChartBar,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { CreateTweet } from "../components/CreateTweet";

const Tweet = ({ tweet }) => (
  <div className="tweet-card">
    <div className="tweet-avatar">
      <Image
        src={tweet.avatar}
        alt={`Avatar of ${tweet.user}`}
        width={48}
        height={48}
        className="user-avatar"
      />
    </div>
    <div className="tweet-content">
      <div className="user-info">
        <div className="user-details">
          <span className="name">{tweet.user}</span>
          <span className="username">{tweet.username}</span>
        </div>
      </div>
      <p className="tweet-text">{tweet.content}</p>
      {tweet.image && (
        <Image
          src={tweet.image}
          alt={`Tweet image from ${tweet.user}`}
          width={600}
          height={400}
          className="tweet-image"
        />
      )}
      <div className="tweet-actions">
        <div className="tweet-action">
          <FaRegComment className="icon" />
          <span>{tweet.comments}</span>
        </div>
        <div className="tweet-action retweet">
          <FaRetweet className="icon" />
          <span>{tweet.retweets}</span>
        </div>
        <div className="tweet-action like">
          <FaRegHeart className="icon" />
          <span>{tweet.likes}</span>
        </div>
        <div className="tweet-action save">
          <FaRegBookmark className="icon" />
          <span>{tweet.saves}</span>
        </div>
        <div className="tweet-action stats">
          <FaRegChartBar className="icon" />
          <span>{tweet.stats}</span>
        </div>
        <div className="tweet-action share">
          <FiShare className="icon" />
          <span>{tweet.shares}</span>
        </div>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const [tweets, setTweets] = useState(initialTweets);

  const handlePostTweet = (tweetContent) => {
    const newTweet = {
      id: new Date().getTime(),
      user: "Usuario de Demo",
      username: "@demouser",
      avatar: "https://i.pravatar.cc/48?u=demouser",
      content: tweetContent,
      comments: 0,
      retweets: 0,
      likes: 0,
      saves: 0,
      stats: 0,
      shares: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div>
      <CreateTweet onPostTweet={handlePostTweet} />
      <div className="feed">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default HomePage; */
