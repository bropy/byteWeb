import { useState } from 'react';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useEffect } from 'react';

const AddGameForm = ({ publisherId }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        avatar: null,
        source: '',
        releaseDate: '',
        price: '',
        approved: false,
        developer: publisherId,
        achievements: []
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    useEffect(() => {
        console.log('Publisher ID:', publisherId); // Check if the ID is being passed correctly
    }, [publisherId]);
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

    const addAchievement = () => {
        setFormData((prevData) => ({
            ...prevData,
            achievements: [...prevData.achievements, { name: '', instruction: '', image: null }]
        }));
    };

    const removeAchievement = (index) => {
        const newAchievements = formData.achievements.filter((_, i) => i !== index);
        setFormData((prevData) => ({
            ...prevData,
            achievements: newAchievements
        }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, avatar: file }));
    };
    const validateForm = () => {
        const newErrors = {};
    
        if (!formData.title.trim()) newErrors.title = 'Назва гри є обов\'язковою';
        if (!formData.description.trim()) newErrors.description = 'Опис гри є обов\'язковим';
        if (!formData.source.trim()) newErrors.source = 'Джерело гри є обов\'язковим';
        if (!formData.releaseDate.trim()) newErrors.releaseDate = 'Дата релізу є обов\'язковою';
        if (!formData.price.trim() || isNaN(formData.price)) newErrors.price = 'Ціна гри має бути числом';
        if (!formData.avatar) newErrors.avatar = 'Зображення гри є обов\'язковим';
    
        // Ensure at least one achievement is added
        if (formData.achievements.length === 0) {
            newErrors.achievements = 'Мінімум одне досягнення є обов\'язковим';
        } else {
            formData.achievements.forEach((achievement, index) => {
                if (!achievement.name.trim()) newErrors[`achievement${index}Name`] = 'Назва досягнення є обов\'язковою';
                if (!achievement.instruction.trim()) newErrors[`achievement${index}Instruction`] = 'Інструкція є обов\'язковою';
                if (!achievement.image) newErrors[`achievement${index}Image`] = 'Зображення досягнення є обов\'язковим';
            });
        }
    
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
            // Upload the avatar image and achievement images
            const avatarUrl = await uploadImage(formData.avatar);
    
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
                source: formData.source,
                releaseDate: formData.releaseDate,
                price: formData.price,
                approved: formData.approved,
                avatar: avatarUrl,
                developer: publisherId,
                achievements: achievementsWithUploadedImages
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
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Додати нову гру</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Назва гри"
                    value={formData.title}
                    onChange={handleInputChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

                <textarea
                    name="description"
                    placeholder="Опис гри"
                    value={formData.description}
                    onChange={handleInputChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

                <input
                    type="text"
                    name="source"
                    placeholder="Джерело"
                    value={formData.source}
                    onChange={handleInputChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.source && <p style={{ color: 'red' }}>{errors.source}</p>}

                <input
                    type="date"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.releaseDate && <p style={{ color: 'red' }}>{errors.releaseDate}</p>}

                <input
                    type="number"
                    name="price"
                    placeholder="Ціна"
                    value={formData.price}
                    onChange={handleInputChange}
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

                <input
                    type="file"
                    name="avatar"
                    onChange={handleAvatarChange}
                    style={{ display: 'block', marginBottom: '10px' }}
                />
                {errors.avatar && <p style={{ color: 'red' }}>{errors.avatar}</p>}

                <div>
                    <h3>Досягнення необхідно створити мінімум одне</h3>
                    {formData.achievements.map((achievement, index) => (
                        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Назва досягнення"
                                value={achievement.name}
                                onChange={(e) => handleAchievementChange(index, e)}
                                style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                            />
                            {errors[`achievement${index}Name`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Name`]}</p>}

                            <input
                                type="text"
                                name="instruction"
                                placeholder="Інструкція"
                                value={achievement.instruction}
                                onChange={(e) => handleAchievementChange(index, e)}
                                style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                            />
                            {errors[`achievement${index}Instruction`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Instruction`]}</p>}

                            <input
                                type="file"
                                name="image"
                                onChange={(e) => handleAchievementImageChange(index, e)}
                                style={{ display: 'block', marginBottom: '10px' }}
                            />
                            {errors[`achievement${index}Image`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Image`]}</p>}

                            <button
                                type="button"
                                onClick={() => removeAchievement(index)}
                                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            >
                                Видалити досягнення
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addAchievement}
                        style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', marginBottom: '20px' }}
                    >
                        + Додати досягнення
                    </button>
                </div>

                {errors.submit && <p style={{ color: 'red' }}>{errors.submit}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    {loading ? 'Додавання...' : 'ДОДАТИ ГРУ'}
                </button>
            </form>
        </div>
    );
};

export default AddGameForm;