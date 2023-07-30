'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,firestore } from '@/firebase/firebase'; // Импортируем auth из вашего файла конфигурации Firebase
import { doc, setDoc } from 'firebase/firestore';


interface IFormIn {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string | undefined; // Обновленный тип для confirmPassword
    country: string;
    nationality: string;
}


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
    country: yup.string().required(),
    nationality: yup.string().required()
});

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormIn> = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Создаем новый документ в Firestore
                const userDocRef = doc(firestore, 'users', user.uid); // 'users' это название коллекции

                // Устанавливаем данные для этого пользователя
                setDoc(userDocRef, {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phoneNumber: data.phoneNumber,
                    country: data.country,
                    nationality: data.nationality,
                    password:data.password
                    // ... другие данные
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
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First Name" />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input {...register("lastName")} placeholder="Last Name" />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <input {...register("phoneNumber")} placeholder="Phone Number" />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

            <input {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}

            <input {...register("password")} placeholder="Password" type="password" />
            {errors.password && <p>{errors.password.message}</p>}

            <input {...register("confirmPassword")} placeholder="Confirm Password" type="password" />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

            <select {...register("country")} >
                <option value="">Select country</option>
                <option value="Russia">Russia</option>
                <option value="USA">USA</option>
                {/* ...другие страны... */}
            </select>
            {errors.country && <p>{errors.country.message}</p>}

            <select {...register("nationality")} >
                <option value="">Select nationality</option>
                <option value="Russian">Russian</option>
                <option value="American">American</option>
                {/* ...другие национальности... */}
            </select>
            {errors.nationality && <p>{errors.nationality.message}</p>}

            <button type="submit">Register</button>
        </form>
    );
}
