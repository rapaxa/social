import {UseFormRegisterReturn, FieldValues} from 'react-hook-form';

interface FormInputProps {
    register: UseFormRegisterReturn;
    name: string;
    placeholder: string;
    type?: string;
    errors: Record<string, any>;
}
const FormInput: React.FC<FormInputProps> = ({register, name, placeholder, type = 'text', errors}) => (
    <>
        <input {...register} name={name} placeholder={placeholder} type={type}/>
        {errors[name] && <p>{errors[name].message}</p>}
    </>
);
 export default FormInput