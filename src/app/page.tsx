'use client'
import Author from "@/app/author/page";
import style from './author/layout.module.css'
import { useAppSelector} from "@/redux/hooks/hooks";
import {selectCount} from "@/redux/slice/users";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const Home = () => {
    const [logIn, setLogIn] = useState(false)
    const router = useRouter()
    const selector = useAppSelector(selectCount)
    useEffect(() => {
        setLogIn(selector.logIn)
    }, [])

    return (
        logIn ?
            (<main className={style.window}>
                <Author/>
            </main>) : (router.push(`/${selector.uid}`)
            )
    )
}
export default Home

