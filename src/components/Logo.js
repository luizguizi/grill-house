import { NavLink } from "react-router-dom";
import styles from './Logo.module.css';


const Logo = () => {
  return (
    <>
    <NavLink to='/'>
      <div className={styles.logo}>
      </div>
      </NavLink>
      </>
  )
}

export default Logo