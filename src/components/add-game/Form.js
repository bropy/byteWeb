import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/AddGameForm.module.css';

export default function AddGameForm({ publisherId, publisherLogin }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        avatar: null,
        source: '',
        releaseDate: '',
        price: 0,
        approved: false,
        developer: publisherLogin,
        genre: '',
        type_game: '',
        players: '',
        deviceSupport: '',
        status: 'Active',
        achievements: [],
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Publisher ID:', publisherId);
    }, [publisherId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'price' ? parseFloat(value) || 0 : value
        }));
    };

    const handleAchievementChange = (index, e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const updatedAchievements = [...prevData.achievements];
            updatedAchievements[index][name] = value;
            return { ...prevData, achievements: updatedAchievements };
        });
    };

    const handleAchievementImageChange = (index, e) => {
        const file = e.target.files[0];
        setFormData((prevData) => {
            const updatedAchievements = [...prevData.achievements];
            updatedAchievements[index].image = file;
            return { ...prevData, achievements: updatedAchievements };
        });
    };

    const addAchievement = () => {
        setFormData((prevData) => ({
            ...prevData,
            achievements: [...prevData.achievements, { name: '', instruction: '', image: null }]
        }));
    };

    const removeAchievement = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            achievements: prevData.achievements.filter((_, i) => i !== index)
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Назва гри є обов\'язковою';
        if (!formData.description.trim()) newErrors.description = 'Опис гри є обов\'язковим';
        if (!formData.avatar) newErrors.avatar = 'Зображення гри є обов\'язковим';
        if (!formData.source.trim()) newErrors.source = 'Джерело гри є обов\'язковим';
        if (!formData.releaseDate.trim()) newErrors.releaseDate = 'Дата релізу є обов\'язковою';
        if (!formData.type_game.trim()) newErrors.type_game = 'Тип програми є обов\'язковим'; // Валідація отриманих полів
        if (isNaN(formData.price)) newErrors.price = 'Ціна гри має бути числом';
        if (!formData.genre) newErrors.genre = 'Жанр є обов\'язковим';
        if (!formData.players) newErrors.players = 'Тип гри є обов\'язковим';
        if (!formData.deviceSupport) newErrors.deviceSupport = 'Підтримка пристроїв є обов\'язковою';

        formData.achievements.forEach((achievement, index) => {
            if (!achievement.name.trim()) newErrors[`achievement${index}Name`] = 'Назва досягнення є обов\'язковою';
            if (!achievement.instruction.trim()) newErrors[`achievement${index}Instruction`] = 'Інструкція досягнення є обов\'язковою';
            if (!achievement.image) newErrors[`achievement${index}Image`] = 'Зображення досягнення є обов\'язковим';
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, avatar: file }));
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
            const avatarUrl = await uploadImage(formData.avatar);
            const achievementsWithUploadedImages = await Promise.all(
                formData.achievements.map(async (achievement) => {
                    const imageUrl = await uploadImage(achievement.image);
                    return { ...achievement, image: imageUrl };
                })
            );
    
            const gameData = {
                ...formData,
                avatar: avatarUrl,
                achievements: achievementsWithUploadedImages,
            };
            console.log('Дані, які відправляються на сервер:', JSON.stringify(gameData, null, 2));

            const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/games', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(gameData,null,2),
            });
    
            if (!response.ok) throw new Error('Failed to create game');
    
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

                <label name='avatar'>
                    Зображення обкладинки гри
                    <input
                        type="file"
                        name="avatar"
                        style={{ height: '0px', padding: '0px', visibility: 'hidden'}}
                        onChange={handleAvatarChange}/>
                {errors.avatar && <p style={{ color: 'red' }}>{errors.avatar}</p>}
                </label>
                <select
                    name="type_game"
                    value={formData.type_game}
                    onChange={handleInputChange}
                >
                    <option value="">Оберіть тип програми</option>
                    <option value="Game">Гра</option>
                    <option value="Application">Застосунок</option>
                    <option value="Instrument">Інструмент</option>
                </select>
                {errors.type_game && <p style={{ color: 'red' }}>{errors.type_game}</p>}
                <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                >
                    <option value="">Оберіть жанр</option>
                    <option value="Role-playing">Рольові</option>
                    <option value="Adventure">Пригоди</option>
                    <option value="Sports">Спортивні</option>
                    <option value="Simulation">Симулятор</option>
                    <option value="Indie">Інді</option>
                    <option value="Cooperative">Кооперативні</option>
                    <option value="Social">Соціальні</option>
                    <option value="Racing">Перегони</option>
                    <option value="Action">Бойовик</option>
                    <option value="Strategy">Стратегія</option>
                </select>
                {errors.genre && <p style={{ color: 'red' }}>{errors.genre}</p>}

                <select
                    name="players"
                    value={formData.players}
                    onChange={handleInputChange}
                >
                    <option value="">Оберіть тип гри</option>
                    <option value="Single Player">Самітна гра</option>
                    <option value="Multiplayer">Багатокористувацька гра</option>
                    <option value="Cooperative">Кооперативна гра</option>
                </select>
                {errors.players && <p style={{ color: 'red' }}>{errors.players}</p>}

                <select
                    name="deviceSupport"
                    value={formData.deviceSupport}
                    onChange={handleInputChange}
                >
                    <option value="">Оберіть підтримку пристроїв</option>
                    <option value="Full Controller Support">Повна підтримка контроллерів</option>
                    <option value="Controller Recommended">Бажано мати контроллер</option>
                    <option value="VR">ВР</option>
                </select>
                {errors.deviceSupport && <p style={{ color: 'red' }}>{errors.deviceSupport}</p>}

                <div>
                    <h3>Досягнення необхідно створити, мінімум одне</h3>
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
                                name="instruction"
                                placeholder="Інструкція досягнення"
                                value={achievement.instruction}
                                onChange={(e) => handleAchievementChange(index, e)}
                            />
                            {errors[`achievement${index}Instruction`] && <p style={{ color: 'red' }}>{errors[`achievement${index}Instruction`]}</p>}

                            <label name={`achievementImage${index}`}>
                                Зображення досягнення
                                <input
                                    type="file"
                                    name={`achievementImage${index}`}
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
}