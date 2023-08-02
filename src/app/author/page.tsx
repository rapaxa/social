
import Link from "next/link";
import style from './stylePageAuthor/layout.module.css'

const Author = () => {
    return (
        <section className={style.window_elements}>
            <h1>Добро пожаловать</h1>
            <div className={style.wrap_btn}>
                <Link className={style.link} href={"/author/login"}>
                    <button >Войти</button>
                </Link>
                <Link className={style.link} href={"/author/registration"}>
                    <button>Регистрация</button>
                </Link>
            </div>
        </section>

    )
}
export default Author