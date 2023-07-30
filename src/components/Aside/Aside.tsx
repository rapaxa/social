import style from './Aside.module.css'
import Link from "next/link";

const Aside = () => {
    return (

        <div className={style.menu}>
            <Link className={style.item} href="/yourPage">
                Моя страница
            </Link>
            <Link className={style.item} href={'/friends'}>
               Мои друзья
            </Link>
            <Link className={style.item}  href={'/message'}>
                Мои сообщения

            </Link>
            <Link  className={style.item} href={'/photo'}>
                Мои Фотографии

            </Link>
            <Link className={style.item}  href={'/groups'}>
               Мои Группы

            </Link>
            <Link className={style.item}  href={'/settings'}>
               Мои Настройки
            </Link>

        </div>

    )
}
export default Aside