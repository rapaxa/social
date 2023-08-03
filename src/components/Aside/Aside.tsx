import style from './Aside.module.css'
import Link from "next/link";

const Aside = () => {
    return (

        <div className={style.menu}>
            <Link className={style.item} href="/yourPage">
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