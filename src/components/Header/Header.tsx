import logo from './logo192.png'
import styles from './Header.module.css'
import React from "react";
import styleHeader from "@/components/Header/Header.module.css";
import styleApp from "@/app/page.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styleHeader.header}>
            <div className={styleApp.container}>
                <div className={styles.header_logo}>
                    <img className={styles.logo} src={logo}></img>
                </div>

                <nav className={styles.nav}>
                    <div className={styles.header_menu}>
                        <Link className={styles.item} href={'/music'}>
                            Music
                        </Link>

                        <Link className={styles.item} href={'/photo'}>
                            Photo
                        </Link>
                        <Link className={styles.item} href={'/news'}>
                            News
                        </Link>
                        <Link className={styles.item} href={'/author'}>
                            Страница регистрации
                        </Link>

                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header