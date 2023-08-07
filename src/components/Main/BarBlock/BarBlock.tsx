import styles from "@/components/Main/Main.module.css";
import {storage} from "@/firebase/firebase"
import {getDownloadURL, listAll, ref, uploadBytes} from "@firebase/storage";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/redux/hooks/hooks";
import {url} from "@/redux/slice/users"

const BarBlock = () => {
    const urlUser = useAppSelector(url)
    const [photo,setPhoto] = useState("")
    useEffect(()=>{
        const storageRef = ref(storage,`${urlUser}/mainPhoto/main.jpg`);
        getDownloadURL(storageRef)
            .then((url)=>{
                setPhoto(url)
            })
            .catch((error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/object-not-found':
                        // File doesn't exist
                        break;
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                }

    })})
    const handleFileChange = async (e:any) => {
        const file = e.target.files[0];
        if (file) {
            const storageRef = ref(storage, `${urlUser}/mainPhoto/main.jpg`);
            await  uploadBytes(storageRef, file)
                .then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                });

            const url = await getDownloadURL(storageRef);
            setPhoto(url);  // Обновляем URL изображения, чтобы отобразить новую загруженную фотографию
        }
    };

    return (
        <div className={styles.block_bar}>
            <div className={styles.block}>
                <div className={styles.main_photo}>
                    <div
                        style={{
                            width: "100%", // Для растягивания блока на всю ширину контейнера
                            height: "200px", // Высоту блока можно установить по своему усмотрению
                            backgroundImage: `url(${photo})`,
                            backgroundPosition: "center", // Центрирование изображения
                            backgroundSize: "cover" // Растягивание изображения по размеру блока
                        }}
                    />
                    <label className={styles.btn}>
                        Choose a file
                        <input type="file" onChange={handleFileChange} />
                    </label>
                </div>


            </div>
        </div>
    );
};

export default BarBlock;