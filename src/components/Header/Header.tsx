'use client'
import logoI from './logo192.png'
import styles from './Header.module.css'
import React, {useEffect, useState} from "react";
import styleHeader from "@/components/Header/Header.module.css";
import styleApp from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {selectCount, setLogIn} from "@/redux/slice/users";
import {useRouter} from 'next/navigation'// Импортируем StaticImage из next/image

const logo: string = `${logoI}`;
const Header = () => {
    const selector = useSelector(selectCount)
    const dispatch = useDispatch()
    const[signText,setSignText] = useState('Войти')
    const [sign,setSign]= useState(false)
    const router = useRouter()
    const handlerSignIn = () => {
        dispatch(setLogIn(true))
        setSign(true)
    }
    const handlerSignOut = () => {
        setSign(false)
        router.push('/')
        dispatch(setLogIn(false))
    }
    useEffect(() => {
        if(selector.logIn === true){
            setSignText('Выйти')
        }else {
            setSignText('Войти')
        }
    }, [selector])
    return (
        <header className={styleHeader.header}>
            <div className={styleApp.container}>
                <div className={styles.header_logo}>
                    <Image width={30} src={logoI} alt="Logo"/>
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
                        <Link className={styles.item} href={'/author'} onClick={ sign? handlerSignIn:handlerSignOut}>
                            {signText}
                        </Link>

                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header