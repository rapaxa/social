import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const schema = yup.object().shape({
    firstName: yup.string().required('Введите имя'),
    lastName: yup.string().required('Введите фамилию'),
    phoneNumber: yup.string().required('Введите номер').matches(/^\+?[0-9]{10,13}$/, "Номер должен состоять из цифр").min(10, 'Номер короткий').max(13, 'Номер слишком длинный'),
    email: yup.string().required('Введите email').email(),
    password: yup.string().required('Введите пароль').min(6, 'Пароль должен иметь не меньше 6 символов'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Пароль не совпадает'),
    country: yup.string().required('Выберите страну'),
    nationality: yup.string().required('Выберите национальность'),
});