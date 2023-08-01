import style from './layout.module.css'
export default function Author({
                                       children,
                                   }: {
    children: React.ReactNode
}){
    return(
        <>
            <div className={style.container}>
                <div className={style.window}>
                    {children}
                </div>

            </div>

        </>

    )
}