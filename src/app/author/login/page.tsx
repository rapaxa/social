'use client'
import React, {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '@/firebase/firebase';
import {useRouter} from 'next/navigation'
import Home from '@/app/page'
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {add, selectCount} from "@/redux/slice/users";

interface IFormInput {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
});

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });
    const router = useRouter()
    const [status, setStatus] = useState(false)
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                dispatch((add(userCredential.user.uid)))
                router.push(`/${userCredential.user.uid}`);
            })
            .catch((error) => {
                // Ошибка при входе в систему...
                console.error("Error signing in: ", error);
            });
    };

    return (
        <div>
            {status ? (
                // Здесь должно быть содержимое, которое вы хотите отобразить после входа пользователя в систему
                <h1>Loading</h1>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder="Email"/>
                    {errors.email && <p>{errors.email.message}</p>}

                    <input {...register("password")} placeholder="Password" type="password"/>
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}
