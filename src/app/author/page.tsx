
import Link from "next/link";
import style from './layout.module.css'

const Author = () => {
    return (
        <div className={style.window_elements}>
            <h1>Добро пожаловать</h1>
            <div className={style.wrap_btn}>
                <Link href={"/author/login"}>
                    <button >Войти</button>
                </Link>
                <Link href={"/author/registration"}>
                    <button>Регистрация</button>
                </Link>
            </div>
        </div>

    )
}
export default Author