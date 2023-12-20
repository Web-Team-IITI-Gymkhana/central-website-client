// components/HeroSection.js
import styles from './HeroSection.module.css'; // Import your CSS module for styling

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Welcome to the</h1>
          </div>
          <div className={styles.textContainer1}>
            <div className={styles.subTitleContainer}>
            <h1 className={styles.subTitle}>Cynaptics Club</h1> 
            </div>
            <div className={styles.textContainer}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's   </p>
                <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it  </p>
            </div>
            </div>
        
      </div>
      <div className={styles.socialIcons}>
          {/* Add your social media icons here */}
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpg" alt="instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.jpg" alt="linkedin" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/discord.jpg" alt="discord" />
          </a>
          {/* Add more social media links as needed */}
        </div>
    </div>
  );
}

export default HeroSection;
