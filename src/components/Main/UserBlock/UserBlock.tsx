import styles from "@/components/Main/Main.module.css";
import {useAppSelector} from "@/redux/hooks/hooks";
import {selectCount} from "@/redux/slice/users";

const UserBlock =()=>{
    const user = useAppSelector((selectCount))
    return(
        <div className={styles.block_user_data}>
            <div className={styles.block}>
                <div className={styles.name}>
                    <span className={styles.header}>{user.firstName} {user.lastName} </span>
                    <span>Online</span>
                </div>
                <div className = {styles.position}>Изменить статус</div>
                <div className={styles.block_user_born}>
                    <p>День рождения: </p>
                    <p>Страна: </p>
                    <p>Город:</p>
                    <p>Номер телефона: </p>
                </div>

            </div>
        </div>
    )
}
export default UserBlock
