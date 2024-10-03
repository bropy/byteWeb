import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

import styles from '../../styles/AddGameForm.module.css'


export default function AddGameForm ({ publisherId }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        headerImage: null,
        logoImage: null,
        source: '',
        releaseDate: '',
        price: '',
        approved: false,
        developer: publisherId,
        achievements: []
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Publisher ID:', publisherId); // Check if the ID is being passed correctly
    }, [publisherId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    const handleHeaderImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, headerImage: file }));
    };

    const handleLogoImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, logoImage: file }));
    };

    const addAchievement = () => {
        setFormData((prevData) => ({
            ...prevData,
            achievements: [...prevData.achievements, { name: '', description: '', image: null }]
        }));
    };

    const handleAchievementChange = (index, e) => {
        const { name, value } = e.target;
        const newAchievements = [...formData.achievements];
        newAchievements[index][name] = value;
        setFormData((prevData) => ({
            ...prevData,
            achievements: newAchievements
        }));
    };

    const handleAchievementImageChange = (index, e) => {
        const file = e.target.files[0];
        const newAchievements = [...formData.achievements];
        newAchievements[index].image = file;
        setFormData((prevData) => ({
            ...prevData,
            achievements: newAchievements
        }));
    };

    const removeAchievement = (index) => {
        const newAchievements = formData.achievements.filter((_, i) => i !== index);
        setFormData((prevData) => ({
            ...prevData,
            achievements: newAchievements
        }));
    };

    const validateForm = () => {
        const newErrors = {};
    
        if (!formData.title.trim()) newErrors.title = 'Назва гри є обов\'язковою';
        if (!formData.description.trim()) newErrors.description = 'Опис гри є обов\'язковим';
        if (!formData.headerImage) newErrors.headerImage = 'Зображення гри є обов\'язковим';
        if (!formData.source.trim()) newErrors.source = 'Джерело гри є обов\'язковим';
        if (!formData.releaseDate.trim()) newErrors.releaseDate = 'Дата релізу є обов\'язковою';
        if (!formData.price.trim() || isNaN(formData.price)) newErrors.price = 'Ціна гри має бути числом';
    
        // Ensure at least one achievement is added
        /*if (formData.achievements.length === 0) {
            newErrors.achievements = 'Мінімум одне досягнення є обов\'язковим';
        } else {*/
            formData.achievements.forEach((achievement, index) => {
                if (!achievement.name.trim()) newErrors[`achievement${index}Name`] = 'Назва досягнення є обов\'язковою';
                if (!achievement.description.trim()) newErrors[`achievement${index}Description`] = 'Опис досягнення є обов\'язковим';
                if (!achievement.image) newErrors[`achievement${index}Image`] = 'Зображення досягнення є обов\'язковим';
            });
        /*}*/
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Image upload failed');
            }

            const data = await res.json();
            return data.url;
        } catch (error) {
            console.error('Error during image upload:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        setLoading(true);
    
        try {
            // Upload the headerImage and achievement images
            const headerImageUrl = await uploadImage(formData.headerImage);
    
            const achievementsWithUploadedImages = await Promise.all(
                formData.achievements.map(async (achievement) => {
                    const imageUrl = await uploadImage(achievement.image);
                    return { ...achievement, image: imageUrl };
                })
            );
    
            // Prepare the game data payload
            const gameData = {
                title: formData.title,
                description: formData.description,
                headerImage: headerImageUrl,
                source: formData.source,
                releaseDate: formData.releaseDate,
                price: formData.price,
                developer: publisherId,
                achievements: achievementsWithUploadedImages,
                approved: formData.approved,
            };
    
            // Log the payload before sending it to the server
            console.log('Payload to be sent:', JSON.stringify(gameData, null, 2));
    
            // Send the game data to the backend
            const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gameData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create game');
            }
    
            console.log('Game created successfully');
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
            <h1>Додати нову гру</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Назва гри"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

                <textarea
                    name="description"
                    placeholder="Опис гри"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

                <input
                    type="text"
                    name="source"
                    placeholder="Джерело"
                    value={formData.source}
                    onChange={handleInputChange}
                />
                {errors.source && <p style={{ color: 'red' }}>{errors.source}</p>}

                <input
                    type="date"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                />
                {errors.releaseDate && <p style={{ color: 'red' }}>{errors.releaseDate}</p>}

                <input
                    type="number"
                    min={0}
                    step={0.01}
                    name="price"
                    placeholder="Ціна"
                    value={formData.price}
                    onChange={handleInputChange}
                />
                {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

                <label name='headerImage'>
                    Зображення обкладинки гри
                    <input
                        type="file"
                        name="headerImage"
                        style={{ height: '0px', padding: '0px', visibility: 'hidden'}}
                        onChange={handleHeaderImageChange}/>
                {errors.headerImage && <p style={{ color: 'red' }}>{errors.headerImage}</p>}
                </label>

                <label name='logoImage'>
                    Зображення лого гри
                    <input
                        type="file"
                        name="logoImage"
                        style={{ height: '0px', padding: '0px', visibility: 'hidden'}}
                        onChange={handleLogoImageChange}/>
                {errors.logoImage && <p style={{ color: 'red' }}>{errors.logoImage}</p>}
                </label>

                

                <div>
                    {/*<h3>Досягнення необхідно створити мінімум одне</h3>*/}
                    {formData.achievements.map((achievement, index) => (
                        <div key={index} style={{ marginTop: '20px', padding: '0 20px 20px 20px', border: '2px solid white' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Назва досягнення"
                                value={achievement.name}
                                onChange={(e) => handleAchievementChange(index, e)}
                            />
                            {errors[`achievement${index}Name`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Name`]}</p>}

                            <input
                                type="text"
                                name="description"
                                placeholder="Опис досягнення"
                                value={achievement.description}
                                onChange={(e) => handleAchievementChange(index, e)}
                            />
                            {errors[`achievement${index}Description`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Description`]}</p>}

                            <label name={`achivementImage${index}`}>
                                Зображення досягнення
                                <input
                                    type="file"
                                    name={`achivementImage${index}`}
                                    style={{ height: '0px', padding: '0px', visibility: 'hidden'}}
                                    onChange={(e) => handleAchievementImageChange(index, e)}/>
                            {errors[`achievement${index}Image`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Image`]}</p>}
                            </label>

                            <button type="button" onClick={() => removeAchievement(index)}
                                style={{ backgroundColor: '#FA3992', color: 'white'}}>
                                Видалити досягнення
                            </button>
                        </div>
                    ))}
                </div>

                <button type="button" onClick={addAchievement}
                    style={{ backgroundColor: '#FA3992', color: 'white'}}>
                    Додати досягнення
                </button>

                <button type="submit" disabled={loading}
                    style={{ backgroundColor: '#3C0BA3', color: 'white' }}>
                    {loading ? 'Додавання...' : 'ДОДАТИ ГРУ'}
                </button>
                {errors.submit && <p style={{ color: 'red' }}>{errors.submit}</p>}
            </form>
        </div>
    );
};