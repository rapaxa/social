import logo from './logo192.png'
import styles from './Header.module.css'
import React from "react";
const Header = () => {
    return (
            <header className={styles.header}>
                <div className={styles.header_logo}>
                    <img className={styles.logo} src={logo}></img>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.header_menu}>
                        <li  className={styles.item}>
                           Music
                        </li>
                        <li className={styles.item}>
                            Photo
                        </li>
                        <li className={styles.item}>
                          News
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
export default Header