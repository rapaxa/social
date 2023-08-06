'use client'

import Main from '@/components/Main/Main'
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/redux/hooks/hooks";
import {dataUser, selectCount} from "@/redux/slice/users";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "@/firebase/firebase";
import {useRouter} from 'next/navigation'

const YourPage: React.FC = () => {
    const dispatch = useDispatch();
    const user = useAppSelector((selectCount))
    const router = useRouter()

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

        // Если пользователь не вошел в систему, перенаправляем его на страницу входа
        if (!user.logIn) {
            router.push('/author/login');
        }
    }, [user.logIn]);
    return (
        <>
            {user.logIn && (
                <Main/>
            )
            }
        </>


    )
}

export default YourPage;
