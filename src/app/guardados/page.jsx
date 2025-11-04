import React from 'react'


import { tweets } from '@/lib/data'

import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
  FaRegChartBar,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";


import styles from '@/app/page.module.css'
import Image from 'next/image'

const guardadosPage = () => {
  const savedTweets = tweets.slice(0, 5);
  return (
    <>
      <div className={styles.savedContainer}>
        <header className={styles.savedTweetsHeader}>Tweets guardados</header>

        {
          savedTweets.map((tweet) => (

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
      </div>

    </>
  )
}

export default guardadosPage