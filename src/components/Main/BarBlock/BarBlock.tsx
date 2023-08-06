import styles from "@/components/Main/Main.module.css";

const BarBlock = () =>{
    return(
    <div className={styles.block_bar}>
        <div className={styles.block}>
            <div className={styles.main_photo}>
                <img className={styles.photo} src="https://sun9-44.userapi.com/impf/c844417/v844417413/1582ab/Tdr3MtzF4sk.jpg?size=1620x2160&quality=96&sign=5299989b8825a9cc303ea6273faa5d74&type=album"  alt=""/>
            </div>
            <button className={styles.btn}>Сменить фото</button>
        </div>
    </div>
    )
}
export default BarBlock
