'use client'
import Main from '../components/Main/Main'
import Author from "@/app/author/page";
import {store} from "@/redux/store";
import {Provider} from "react-redux";

const Home = () => {
    return (
        <Provider store={store}>
        <Author/>
        </Provider>
    )
}
export default Home

