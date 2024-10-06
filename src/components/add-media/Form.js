import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AddGameForm.module.css';

export default function AddScreenshotForm({ profileId }) { // profileId passed from AddMedia
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        source: null,
        date: '',
        likes: 0,
        dislikes: 0,
        award: 0, // Super like
        gameId: '', // юзер сам пише айді, в майбутньому можна  додати пошук по грі
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'likes' || name === 'dislikes' || name === 'award'
                ? parseInt(value, 10) || 0
                : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Назва скріншота є обов\'язковою';
        if (!formData.description.trim()) newErrors.description = 'Опис скріншота є обов\'язковим';
        if (!formData.source) newErrors.source = 'Зображення скріншота є обов\'язковим';
        if (!formData.date.trim()) newErrors.date = 'Дата скріншота є обов\'язковою';
        if (!formData.gameId.trim()) newErrors.gameId = 'ID гри є обов\'язковим';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlesourceChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, source: file }));
    };

    const uploadImage = async (file) => {
        if (!file) return null;

        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to upload image');
        }

        const { url } = await response.json();
        return url;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const sourceUrl = await uploadImage(formData.source);

            const screenshotData = {
                name: formData.name,
                description: formData.description,
                source: sourceUrl, // лінк на завантажене забраження
                date: formData.date,
                likes: formData.likes,
                dislikes: formData.dislikes,
                award: formData.award, // Це супер лайк
                gameId: formData.gameId,
                profileId: profileId,  
            };

            console.log('Дані, які відправляються на сервер:', JSON.stringify(screenshotData, null, 2));

            const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/media/screenshots', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(screenshotData),
            });

            if (!response.ok) throw new Error('Failed to create screenshot');

            console.log('Screenshot created successfully');
            router.push('/');
        } catch (error) {
            console.error('Error:', error);
            setErrors({ submit: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Додати новий скріншот</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Назва скріншота"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                <textarea
                    name="description"
                    placeholder="Опис скріншота"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />
                {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}


                <input
                    type="text"
                    name="gameId"
                    placeholder="ID гри"
                    value={formData.gameId}
                    onChange={handleInputChange}
                />
                {errors.gameId && <p style={{ color: 'red' }}>{errors.gameId}</p>}

                <label name='source'>
                    Зображення скріншота
                    <input
                        type="file"
                        name="source"
                        style={{ height: '0px', padding: '0px', visibility: 'hidden'}}
                        onChange={handlesourceChange} />
                    {errors.source && <p style={{ color: 'red' }}>{errors.source}</p>}
                </label>

                <button type="submit" disabled={loading} style={{ backgroundColor: '#3C0BA3', color: 'white' }}>
                    {loading ? 'Додавання...' : 'ДОДАТИ СКРІНШОТ'}
                </button>
                {errors.submit && <p style={{ color: 'red' }}>{errors.submit}</p>}
            </form>
        </div>
    );
}
