'use client';

import styles from './page.module.css'

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const trends = [
  { category: "Tecnología", topic: "Next.js 14", posts: "125K" },
  { category: "Negocios", topic: "Firebase", posts: "89.2K" },
  { category: "Gaming", topic: "GTAVI", posts: "140K" },
  { category: "Música", topic: "#NuevoAlbum", posts: "543K" },
  { category: "Deportes", topic: "Copa del Mundo", posts: "1.2M" },
  { category: "React", topic: "Server Components", posts: "45K" },
  { category: "Gaming", topic: "#IndieDev", posts: "78K" },
  { category: "Cine", topic: "Avengers 5", posts: "108K" },
];

export default function ExplorarPage() {

  /*   const pageStyles = {
      color: 'var(--color-foreground)',
    };
  
    const searchContainerStyles = {
      position: 'relative',
      marginBottom: '24px',
      padding: '16px',
      borderBottom: '1px solid var(--color-border)'
    };
  
    const searchInputStyles = {
      width: '100%',
      padding: '12px 40px 12px 20px',
      backgroundColor: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '9999px',
      color: 'var(--color-foreground)',
      fontSize: '16px',
    };
  
    const searchIconStyles = {
      position: 'absolute',
      right: '35px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--color-muted-foreground)',
    };
  
    const trendsContainerStyles = {
      padding: '16px',
    };
  
    const trendItemStyles = {
      padding: '16px 0',
      borderBottom: '1px solid var(--color-border)',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      listStyleType: 'none',
      color: 'white',
    };
  
    const trendCategoryStyles = {
      fontSize: '14px',
      color: 'var(--color-muted-foreground)',
    };
  
    const trendTopicStyles = {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '4px 0',
    };
   */
  
  return (

    <div className={styles.pageStyles}>
      <div className={styles.searchContainer}>
        <div style={{ position: 'relative' }} >
          <input
            type="text"
            placeholder="Buscar"
            className={styles.searchInput}
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </div>

      {/* <div style={styles.trendsContainerStyles}>

          <ul>
            {trends.map((trend, index) => (
              <li
                key={index}
                style={{
                  ...styles.trendItemStyles,
                  borderBottom: index === trends.length - 1 ? 'none' : trendItemStyles.borderBottom
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >

                <div style={styles.trendCategoryStyles}>{trend.category}</div>
                <div style={styles.trendTopicStyles}>{trend.topic}</div>
                <div style={styles.trendCategoryStyles}>{trend.posts} posts</div>
              </li>
            ))}
          </ul>
        </div> */}

      <div className={styles.trendsContainer}>
        <ul>
          {trends.map((trend) => (
            <li key={trend.index} className={styles.trendItem}>
              <div className={styles.trendCategory}>{trend.category}</div>
              <div className={styles.trendTopic}>{trend.topic}</div>
              <div className={styles.trendCategory}>{trend.posts}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
