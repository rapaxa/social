import { useRouter } from 'next/navigation';

interface ModalProps {
    onClose: () => void;
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
        <>
            <div>Ошибка ввода логина или пароля</div>
            <button onClick={handleClose}>Попробывать ещё раз</button>
            <button onClick={handleRegistr}>Регистрация</button>
        </>
    );
};

export default Modal;
