import styles from './Specials.module.css'

const Specials = () => {
  return (
    <div className={styles.specials}>
            <div className={styles.container}>
            <div className={styles.section1}>
            <div className={styles.menu}>
            <h2>SPECIAL OF THE MONTH</h2>
                    <span>Lorem Ipsum </span>
            </div>
            
            <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
             nostrud exercitation ullamco laboris.
             </p>
            </div>
            </div>
            <div className={styles.specialsimg}></div>
            </div>
    </div>
  )
}

export default Specials