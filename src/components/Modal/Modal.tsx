import { useRouter } from 'next/navigation';
import style from "@/app/author/stylePageAuthor/form.module.css"
interface ModalProps {
    onClose: () => void;
    errorMessage: string;
    children?: React.ReactNode; // Добавьте это, если хотите передать children

}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const router = useRouter();

    const handleClose = () => {
        onClose(); // Закрываем модальное окно
        router.push('/author/login'); // Перенаправляем пользователя на главную страницу
    };
    const handleRegistr = () =>{
        onClose();
        router.push('/author/registration')
    }

    return (
        <div className={style.form_window}>
            <p>Ошибка ввода логина или пароля</p>
            <button onClick={handleClose}>Попробывать ещё раз</button>
            <button onClick={handleRegistr}>Регистрация</button>
        </div>
    );
};

export default Modal;
