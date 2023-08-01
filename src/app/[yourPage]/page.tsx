'use client'
import styleAside from "@/components/Aside/Aside.module.css";
import Aside from "@/components/Aside/Aside";
import styleApp from "@/app/page.module.css";
import Main from '@/components/Main/Main'
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/redux/hooks/hooks";
import {dataUser, selectCount} from "@/redux/slice/users";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "@/firebase/firebase";

const YourPage: React.FC = () => {
    const dispatch = useDispatch();
    const user = useAppSelector((selectCount))
    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "users"))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                if (doc.id === user.uid)
                    // doc.data() is never undefined for query doc snapshots
                    dispatch(dataUser(doc.data()))

            });
        }
        fetchData();
    }, []);
    return (

        <div className={styleApp.container}>

            <aside className={styleAside.aside}>
                <Aside/>
            </aside>
            <main>
                <Main/>
            </main>
        </div>
    )
}

export default YourPage;
