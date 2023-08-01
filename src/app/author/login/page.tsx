'use client'
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation'
import { useAppDispatch } from "@/redux/hooks/hooks";
import { add } from "@/redux/slice/users";
import Modal from "@/components/Modal/Modal";
import './login.module.css'

interface IFormInput {
    email: string;
    password: string;
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
    const [showModal, setShowModal] = useState(false);
    const dispatch = useAppDispatch()

    const closeAndResetModal = () => {
        setShowModal(false);
    };

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                dispatch(add(userCredential.user.uid));
                router.push(`/${userCredential.user.uid}`);
            })
            .catch((error) => {
                console.error('Error:', error);
                setShowModal(true);
            });
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
        <div>
            {showModal ? (
                <Modal onClose={closeAndResetModal} />
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

