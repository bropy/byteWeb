import { useState } from 'react';
import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';
import { useRouter } from 'next/router';

const AddGameForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        avatar: '', 
        file: '', 
        source: '',
        releaseDate: '',
        price: '',
        approved: false,
        developers: [],
        publisher: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // For the image upload process

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, file }));
    };


const uploadImage = async () => {
    const formDataImage = new FormData();
    formDataImage.append('image', formData.file);
  
    setLoading(true);
  
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataImage,
      });
  
      if (!res.ok) {
        const errorResponse = await res.json();
        console.error('Error from API:', errorResponse);
        throw new Error(errorResponse.error || 'Image upload failed');
      }
  
      const data = await res.json(); 
      setLoading(false);
  
      return data.url; // URL
    } catch (error) {
      setLoading(false);
      console.error('Error during image upload:', error);
      throw new Error('Image upload failed');
    }
  };
      
      
    

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = 'Назва гри є обов\'язковою';
        if (!formData.description.trim()) newErrors.description = 'Опис гри є обов\'язковим';
        if (!formData.source.trim()) newErrors.source = 'Джерело гри є обов\'язковим';
        if (!formData.releaseDate.trim()) newErrors.releaseDate = 'Дата релізу є обов\'язковою';
        if (!formData.price.trim() || isNaN(formData.price)) newErrors.price = 'Ціна гри має бути числом';
        if (!formData.file) newErrors.file = 'Зображення є обов\'язковим';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                // First, upload the image and get the Cloudinary URL
                const avatarUrl = await uploadImage();

                // Now prepare the payload with the image URL
                const payload = {
                    title: formData.title,
                    description: formData.description,
                    avatar: avatarUrl, // Cloudinary image URL
                    source: formData.source,
                    releaseDate: formData.releaseDate,
                    price: parseFloat(formData.price),
                    approved: formData.approved,
                    developers: formData.developers,
                    publisher: formData.publisher
                };

                console.log('Payload:', payload);

                // Send the game data to your backend
                const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/games', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Game added successfully:', data);
                    router.push('/games'); // Redirect to the games page
                } else {
                    const error = await response.text();
                    console.error('Server response:', error);
                }
            } catch (error) {
                console.error('Image upload or form submission failed:', error);
            }
        }
    };

    return (
        <div className={styles.smain}>
            <div className={styles.main}>
                <div className={`${styles.h1} ${text.fontWeight800}`}>
                    <h1>Додати нову гру</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        className={`${styles.inputContainer} ${errors.title && styles.error}`}
                        placeholder="Назва гри"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                    {errors.title && <p className={styles.errorText}>{errors.title}</p>}

                    <textarea
                        name="description"
                        className={`${styles.inputContainer} ${errors.description && styles.error}`}
                        placeholder="Опис гри"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    {errors.description && <p className={styles.errorText}>{errors.description}</p>}

                    <input
                        type="file"
                        accept="image/*"
                        className={`${styles.inputContainer} ${errors.file && styles.error}`}
                        onChange={handleFileChange}
                    />
                    {errors.file && <p className={styles.errorText}>{errors.file}</p>}
                    {loading && <p>Завантаження зображення...</p>}

                    <input
                        type="text"
                        name="source"
                        className={`${styles.inputContainer} ${errors.source && styles.error}`}
                        placeholder="Джерело гри"
                        value={formData.source}
                        onChange={handleInputChange}
                    />
                    {errors.source && <p className={styles.errorText}>{errors.source}</p>}

                    <input
                        type="date"
                        name="releaseDate"
                        className={`${styles.inputContainer} ${errors.releaseDate && styles.error}`}
                        placeholder="Дата релізу"
                        value={formData.releaseDate}
                        onChange={handleInputChange}
                    />
                    {errors.releaseDate && <p className={styles.errorText}>{errors.releaseDate}</p>}

                    <input
                        type="number"
                        name="price"
                        className={`${styles.inputContainer} ${errors.price && styles.error}`}
                        placeholder="Ціна гри"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                    {errors.price && <p className={styles.errorText}>{errors.price}</p>}

                    <input
                        type="text"
                        name="publisher"
                        className={styles.inputContainer}
                        placeholder="ID або ім'я видавця"
                        value={formData.publisher}
                        onChange={handleInputChange}
                    />

                    <button type='submit' className={styles.Submit}>ДОДАТИ ГРУ</button>
                </form>
            </div>
        </div>
    );
};

export default AddGameForm;
