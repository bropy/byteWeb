import { useState } from 'react';
import Button from '../layouts/Button';
import styles from '../../styles/profile/PopupForm.module.css'; // Add styles as needed

export default function PopupForm({ profile, onClose }) {
    const [nickname, setNickname] = useState(profile.nickname);
    const [country, setCountry] = useState(profile.country);
    const [description, setDescription] = useState(profile.description);
    const [status, setStatus] = useState(profile.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the profile update logic here
        console.log({ nickname, country, description, status });
        onClose(); // Close the popup after submission
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
                    <Button onClick={onClose}>
                        <div>Закрити</div>
                    </Button>
                </form>
            </div>
        </div>
    );
}
