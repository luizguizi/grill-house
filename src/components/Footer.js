import styles from './Footer.module.css';

// import images midias
import insta from '../imgs/insta.png';
import fb from '../imgs/fb.png';
import twitter from '../imgs/tt.png';
import youtube from '../imgs/yt.png';

const Footer = () => {
const media = [insta, fb, twitter, youtube];

  return (
    <div className={styles.footer}>
        <div className={styles.container}>
        <>
        <div className={styles.urllogo}></div>
        </>
        <h3> - The Meat Experience - </h3>
        <section className={styles.infos}>
            <div className={styles.info_left}>
              <h2>OPEN</h2>
              <p>Mon.-Thurs.: 12AM - 11PM</p>
              <p>Fri.-Sun.: 9AM - 12PM</p>
            </div>
            <div className={styles.info_right}>
                <div className={styles.menu_footer}>
                <ul>
                  <li>
                      <a href="/">Home</a>
                    </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                </ul>
                </div>
                <div className={styles.menu_footer}>
                <ul>
                <li>
                      <a href="/">Blog</a>
                    </li>
                  <li>
                    <a href="/">Cookies</a>
                  </li>
                  <li>
                    <a href="/">Site map</a>
                  </li>
                </ul>
                </div>
            </div>
        </section>
    </div>
    <section className={styles.adress}>
            <div className={styles.adress1}><p>Madison Street, 30 - City</p></div>
            <div className={styles.adress2}>

            {media.map((media, index) => 
                <img src={media} key={index} alt="redes" />
            )}
            </div>
        </section>
    </div>
  )
}

export default Footer