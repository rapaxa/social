'use client'
import React, {useEffect, useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '@/firebase/firebase';
import {useRouter} from 'next/navigation'
import {useAppDispatch} from "@/redux/hooks/hooks";
import {add, setLogIn} from "@/redux/slice/users";
import Modal from "@/components/Modal/Modal";
import styleForm from '../stylePageAuthor/form.module.css'

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
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useAppDispatch()
    const closeAndResetModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };

    const handleUserLogin = (uid: string) => {
        dispatch(add(uid));
        dispatch(setLogIn(true))

        router.push(`/${uid}`);
    };

    const handleLoginError = (error: any) => {
        console.error('Error:', error);
        setErrorMessage(error.message);
        setShowModal(true);
    };

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                handleUserLogin(userCredential.user.uid);
            })
            .catch(handleLoginError);
    };

    useEffect(() => {
        if (showModal) {
            const timeout = setTimeout(() => {
                closeAndResetModal();
            }, 10000);

            return () => clearTimeout(timeout);
        }
    }, [showModal]);

    return (
        <>
            {showModal ? (
                <Modal onClose={closeAndResetModal} errorMessage={errorMessage}>
                    <p>Error: {errorMessage}</p>
                </Modal>
            ) : (
                <form className={styleForm.form_window} onSubmit={handleSubmit(onSubmit)}>
                    {errors.email && <p>{errors.email.message}</p>}
                    <input {...register("email")} placeholder="Email"/>

                    {errors.password && <p>{errors.password.message}</p>}
                    <input {...register("password")} placeholder="Password" type="password"/>

                    <button type="submit">Login</button>
                </form>
            )}
        </>
    );
}
