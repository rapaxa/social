import {SubmitHandler} from "react-hook-form";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, firestore} from '@/firebase/firebase';
import {doc, setDoc} from 'firebase/firestore';

interface IFormIn {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string | undefined;
    country: string;
    nationality: string;
}

const useFormSubmit = (): SubmitHandler<IFormIn> => data => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Создаем новый документ в Firestore
            const userDocRef = doc(firestore, 'users', user.uid);

            // Устанавливаем данные для этого пользователя
            setDoc(userDocRef, {
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                country: data.country,
                nationality: data.nationality,
                password: data.password
            })
                .then(() => {
                    // Данные успешно записаны!
                })
                .catch((error) => {
                    // Ошибка при записи данных...
                    console.error("Error writing document: ", error);
                });
        })
        .catch((error) => {
            // Ошибка при создании пользователя...
            console.error("Error creating user: ", error);
        });
}

export default useFormSubmit;
