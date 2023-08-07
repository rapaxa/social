'use client'
import {useForm, SubmitHandler} from 'react-hook-form';
import useFormSubmit from '@/firebase/hooks/useFormSubmit';
import styleForm from "../stylePageAuthor/form.module.css"
import {schema} from './formSchema'
import {yupResolver} from "@hookform/resolvers/yup";
import FormInput from "@/components/FormRegistr/FormInput";
import {useState} from "react";


interface Option {
    value: string;
    label: string;
}


export default function Register() {
    const onSubmit = useFormSubmit()
    const [isSubmitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const submitForm: SubmitHandler<any> = (data) => {
        onSubmit(data);
        setSubmitted(true);
    };
    const countryOptions: Option[] = [
        {value: 'Украина', label: 'Украина'},
        {value: 'Россия', label: 'Россия'},
        {value: 'Беларусь', label: 'Беларусь'},
        {value: 'American', label: 'American'},
        {value: 'England', label: 'England'},
        {value: 'Scotland', label: 'Scotland'},
        {value: 'Spain', label: 'Spain'},
    ];

    const nationalityOptions: Option[] = [
        {value: 'Украинец', label: 'Украинец'},
        {value: 'Русский', label: 'Русский'},
        {value: 'Беларус', label: 'Беларус'},
        {value: 'American', label: 'American'},
        {value: 'English', label: 'English'},
        {value: 'Spain', label: 'Spain'},

    ];

// Используем новый компонент и массивы в форме
    return (
        <form className={styleForm.form_window} onSubmit={handleSubmit(submitForm)}>
            <FormInput register={register("firstName")} name="firstName" placeholder="First Name" errors={errors}/>
            <FormInput register={register("lastName")} name="lastName" placeholder="Last Name" errors={errors}/>
            <FormInput register={register("phoneNumber")} name="phoneNumber" placeholder="Phone Number"
                       errors={errors}/>
            <FormInput register={register("email")} name="email" placeholder="Email" errors={errors}/>
            <FormInput register={register("password")} name="password" placeholder="Password" type="password"
                       errors={errors}/>
            <FormInput register={register("confirmPassword")} name="confirmPassword" placeholder="Confirm Password"
                       type="password" errors={errors}/>
            {errors.country && <p>{errors.country.message}</p>}
            <select {...register("country")} >
                <option value="">Select country</option>
                {countryOptions.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>

            {errors.nationality && <p>{errors.nationality.message}</p>}
            <select {...register("nationality")} >
                <option value="">Select nationality</option>
                {nationalityOptions.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>

            <button type="submit">Register</button>
        </form>

    );
}
