import style from './Aside.module.css'
const Aside =()=>{
    return(

            <ul className={style.menu}>
                <li className={style.item}>Моя страница</li>
                <li className={style.item}>Моф друзья</li>
                <li className={style.item}>Мои сообщения</li>
                <li className={style.item}>Мои Фотографии</li>
                <li className={style.item}>Мои Группы</li>
                <li className={style.item}>Мои Настройки</li>
            </ul>

    )
}
export default Aside