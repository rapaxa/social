import logoI from './logo192.png'
import styles from './Header.module.css'
import React from "react";
import styleHeader from "@/components/Header/Header.module.css";
import styleApp from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";// Импортируем StaticImage из next/image

const logo: string = `${logoI}`;
const Header = () => {
    return (
        <header className={styleHeader.header}>
            <div className={styleApp.container}>
                <div className={styles.header_logo}>
                    <Image width={30}  src={logoI} alt="Logo"  />
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