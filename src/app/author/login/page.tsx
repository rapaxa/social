
'use client'
import React, {useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation'

import {Main} from "next/document";
import Home from '@/app/page'

interface IFormInput {
    email: string;
    password: string;
    data:string
}
const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });
    const router = useRouter()
    const [status,setStatus] = useState(false)
   const [email,setEmail] = useState('')
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                 router.push('/')
                setStatus(true);
                console.log(data.email)
                setEmail(data.email)

            })
            .catch((error) => {
                // Ошибка при входе в систему...
                setStatus(false)
                console.error("Error signing in: ", error);
            });
    };

    return (
        <div>
            {status ? (
                // Здесь должно быть содержимое, которое вы хотите отобразить после входа пользователя в систему
               <><Home /></>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder="Email" />
                    {errors.email && <p>{errors.email.message}</p>}

                    <input {...register("password")} placeholder="Password" type="password" />
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}
