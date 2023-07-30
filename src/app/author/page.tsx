
import Link from "next/link";

const Author = () => {
    return (
        <div>
            <h1>Добро пожаловать</h1>

            <button><Link href={"author/login"}>Войти</Link></button>

            <button><Link href={"author/registration"}>Регистрация</Link></button>

        </div>

    )
}
export default Author