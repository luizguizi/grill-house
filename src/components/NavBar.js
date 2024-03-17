import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <>
        <Logo />
        </>
        <>
        <ul className={styles.link_list}>
            <li >
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.noactive)} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.noactive)} to='/menu'>Menu</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.noactive)} to='/specials'>Specials</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.noactive)} to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? styles.active : styles.noactive)} to='/method'>Method</NavLink>
            </li>   
        </ul>
        </>
    </nav>
    
  )
}

export default NavBar