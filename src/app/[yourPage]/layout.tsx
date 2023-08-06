import Aside from "@/components/Aside/Aside";
import style from "./layout.module.css"
import React from "react";


export default function mainPage({
                                           children,
                                       }: {
    children: React.ReactNode
}){
    return(
        <>
            <div className={style.container}>
                <aside className={style.aside}>
                    <Aside/>
                </aside>
                <main className={style.main}>
                    {children}
                </main>
            </div>
        </>

    )
}