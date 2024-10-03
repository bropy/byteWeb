import React, { useState } from 'react';
import Button from '../layouts/Button';
import styles from '../../styles/profile/ProfileInfo.module.css';

export default function PopupForm({ profile, onClose, onSave }) {
    const [formData, setFormData] = useState({
        nickname: profile.nickname || '',
        country: profile.country || '',
        description: profile.description || '',
        status: profile.status || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Зупиняємо відправку форми
        await onSave(formData); // Викликаємо метод для збереження даних
    };

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <h2>Редагувати профіль</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Нікнейм</label>
                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Країна</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Опис</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Статус</label>
                        <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button type="submit">
                            <div>Зберегти</div>
                        </Button>
                        <Button onClick={onClose} type="button">
                            <div>Закрити</div>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
