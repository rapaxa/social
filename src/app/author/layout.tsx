import style from './layout.module.css'
export default function AuthorChildren({
                                       children,
                                   }: {
    children: React.ReactNode
}){
    return(
        <main className={style.window}>
                    {children}
        </main>

    )
}