'use client'
import Link from "next/link";
import {MouseEvent} from "react";

const LogInButton = () => {
    const handleClick = (event: MouseEvent) => {
        event.preventDefault();


    };

    return (
        <Link href={"/author/login"}>
            <button onClick={handleClick}>Войти</button>
        </Link>
    );
};
export default LogInButton