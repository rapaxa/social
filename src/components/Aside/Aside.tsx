'use client'
import style from './Aside.module.css'
import Link from "next/link";
import {useAppSelector} from "@/redux/hooks/hooks";
import {selectCount} from "@/redux/slice/users";

const Aside = () => {
    const selector = useAppSelector(selectCount).uid
    return (

        <div className={style.menu}>
            <Link className={style.item} href={`/${selector}`}>
                Моя страница
            </Link>
            <Link className={style.item} href={'/yourPage/friends'}>
               Мои друзья
            </Link>
            <Link className={style.item}  href={'/yourPage/message'}>
                Мои сообщения

            </Link>
            <Link  className={style.item} href={'/yourPage/photo'}>
                Мои Фотографии

            </Link>
            <Link className={style.item}  href={'/yourPage/groups'}>
               Мои Группы

            </Link>
            <Link className={style.item}  href={'/yourPage/settings'}>
               Мои Настройки
            </Link>

        </div>

    )
}
export default Aside