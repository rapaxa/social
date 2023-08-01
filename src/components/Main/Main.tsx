import styles from '../Main/Main.module.css'
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {selectCount} from "@/redux/slice/users";

const Main = ()=> {
    const user = useAppSelector((selectCount))
    return (
      <>
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
                    <h1>{user.firstName}</h1>
                    <p>{user.lastName}</p>
                    <span>{user.phone}</span>
                </div>
            </div>
      </>

    )
}
export default Main