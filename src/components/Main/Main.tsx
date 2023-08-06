import styles from '../Main/Main.module.css'
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {selectCount} from "@/redux/slice/users";
import BarBlock from "@/components/Main/BarBlock/BarBlock";
import UserBlock from "@/components/Main/UserBlock/UserBlock";

const Main = ()=> {

    return (
      <div className={styles.container}>
          <BarBlock/>
          <UserBlock/>
      </div>

    )
}
export default Main