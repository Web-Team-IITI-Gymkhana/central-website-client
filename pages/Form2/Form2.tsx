import React from 'react'
import styles from './Form2.module.css'
import Script from 'next/script'

const Form2 = () => {
  return (
    <div className={styles.body}>
     

    

<h1 className={styles.h1} >EDIT POSTER & LOGO</h1>
    
    <div className={styles.buttoncontainer}>
        <button type="button" className={styles.custombutton} id="button1">Preview</button>
        <button type="button" className={styles.custombutton} id="button2">Change Theme</button>
    </div>

    <div className={styles.uploadsection}>
        
        <div> <label  className={styles.inputlabel}>Click Here to upload Logo</label>
            <input type="file" className={styles.inputImage} />
            <div className={styles.previewimage}>
                <div className={styles.placeholder}></div>
                <div className={styles.uploadarea} title="select a image"></div>
            </div></div>
       

        
        <div><label   className={styles.inputlabel}>Click Here to upload Poster</label>
            <input type="file" className={styles.inputImage2}/>
            <div className={styles.previewimage}>
                <div className={styles.placeholder}></div>
                <div className={styles.uploadarea} title="select another image"></div>
            </div></div>
        
    </div>
    <button type="button" className={styles.bottomButton} >Submit</button> 

    

    </div>
    
  )
}

export default Form2
