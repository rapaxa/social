import styles from '../Main/Main.module.css'

const Main = () => {
    return (
        <div className={styles.content}>
            <div className={styles.main_info}>
                <div className={styles.main_info}>
                    <div className={styles.main_photo}>
                        <img className={styles.photo} src="https://sun9-44.userapi.com/impf/c844417/v844417413/1582ab/Tdr3MtzF4sk.jpg?size=1620x2160&quality=96&sign=5299989b8825a9cc303ea6273faa5d74&type=album"  alt=""/>
                    </div>
                    <button className={styles.btn}>Edit</button>
                </div>
                

            </div>
            <div className={styles.wall}>
                <div className={styles.wall_top}>
                    <h1>Pavlo Volodchenko </h1>
                    <span>online</span>
                </div>

            </div>
        </div>
    )
}
export default Main