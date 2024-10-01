import React, { useState } from 'react';
import Button from '../layouts/Button';
import styles from '../../styles/profile/ProfileInfo.module.css';

export default function PopupForm({ profile, onClose, onSave }) {
    const [nickname, setNickname] = useState(profile.nickname || '');
    const [country, setCountry] = useState(profile.country || '');
    const [description, setDescription] = useState(profile.description || '');
    const [status, setStatus] = useState(profile.status || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = { ...profile, nickname, country, description, status };
        await onSave(updatedProfile);
        onClose();
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
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Країна</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Опис</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Статус</label>
                        <input
                            type="text"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                    <Button type="submit">
                        <div>Зберегти</div>
                    </Button>
                    <Button onClick={onClose} type="button">
                        <div>Закрити</div>
                    </Button>
                </form>
            </div>
        </div>
    );
}
