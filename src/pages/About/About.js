import styles from './About.module.css'

const About = () => {
  return (
    <div>
            <div className={styles.background}>
                    <div className={styles.section1}>
                        <div className={styles.menu}>
                        <h2>LIVE MUSIC</h2>
                    <span>JAZZ NIGHT</span><br />
                    <span>Every Friday !!</span>
                        </div>
                        <div className={styles.text}>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
             nostrud exercitation ullamco laboris.
                                </p>
                        </div>
                    </div>
                    <div className={styles.about_img}>

                    </div>
            </div>
        
    </div>
  )
}

export default About