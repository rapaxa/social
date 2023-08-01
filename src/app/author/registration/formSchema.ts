import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
    country: yup.string().required(),
    nationality: yup.string().required(),
});