import React from 'react'
import styles from './Template.module.css'
const Template2 = () => {
  return (
    <div className={styles.body}>
      

   
      <h1 className={styles.h1} >CHOOSE A TEMPLATE</h1>
    <div className={styles.carousel}>
    
      <div className={styles.carouselcontainer}>
        <div className={styles.carouselitem}>
          <img
            className={styles.carouselitemimg}
            src="https://www.kleingers.com/wp-content/uploads/TeamGIF_3.gif"
            alt="people"
          />
          <div className={styles.carouselitemdetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            
          </div>
        </div>
        <div className={styles.carouselitem}>
          <img
            className={styles.carouselitemimg}
            src="https://www.kleingers.com/wp-content/uploads/TeamGIF_3.gif"
            alt="people"
          />
          <div className={styles.carouselitemdetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            
          </div>
        </div>
        <div className={styles.carouselitem}>
          <img
            className={styles.carouselitemimg}
            src="https://www.kleingers.com/wp-content/uploads/TeamGIF_3.gif"
            alt="people"
          />
          <div className={styles.carouselitemdetails}>
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            
          </div>
        </div>
        <div className={styles.carouselitem}>
          <img
            className={styles.carouselitemimg}
            src="https://www.kleingers.com/wp-content/uploads/TeamGIF_3.gif"
            alt="people"
          />
          <div className={styles.carouselitemdetails}>
            <div className={styles.controls}>
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <div className={styles.controls}></div>
          </div>
        </div>
        
        
        
        </div>
      </div>

    </div>


    
  );
}

export default Template2
