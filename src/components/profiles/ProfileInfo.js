import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchData } from '../../pages/api/profileApi';
import Button from '../layouts/Button';
import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/ProfileInfo.module.css';

export default function ProfileInfo({ profile, currentUser }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(profile);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async () => {
        // Call API to update profile
        await fetch(`/profiles/${profile.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedProfile),
        });
        setIsEditing(false); // Close the popup after saving changes
    };

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.profileInfo}`}>
            <img 
                src={profile.avatar || "https://static.vecteezy.com/system/resources/previews/011/995/267/non_2x/8-bit-pixel-character-game-illustration-vector.jpg"} 
                alt={profile.nickname} 
                className={styles.profileAvatar}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <div className={`${positioning.column} ${styles.column} ${positioning.justifyBetween}`}>
                <div>
                    <div className={`${text.textMedium} ${text.fontWeight800}`}>
                        {profile.nickname || "No data"}
                    </div>
                    <div className={positioning.marginVertical20}>
                        Країна: {profile.country || "No data"}
                    </div>
                    <div>
                        <p>{profile.description || "No data"}</p>
                    </div>
                </div>
                <div>
                    <div className={`${positioning.row} ${positioning.marginVertical20}`}>
                        <div>
                            Статус:&nbsp;
                        </div>
                        <div className={`${text.uppercase} ${text.fontWeight800}`}>
                            <p>{profile.status || "No data"}</p>
                        </div>
                    </div>
                    {currentUser && currentUser.id === profile.userId ? (
                        <Button onClick={() => setIsEditing(true)}>
                            <div>Редагувати профіль</div>
                        </Button>
                    ) : (
                        <Button>
                            <div>Слідкувати</div>
                        </Button>
                    )}
                </div>
            </div>

            {isEditing && (
                <div className={styles.editPopup}>
                    <div className={styles.popupContent}>
                        <h3>Редагувати профіль</h3>
                        <input
                            type="text"
                            name="nickname"
                            value={editedProfile.nickname}
                            onChange={handleEditChange}
                            placeholder="Nickname"
                        />
                        <input
                            type="text"
                            name="country"
                            value={editedProfile.country}
                            onChange={handleEditChange}
                            placeholder="Country"
                        />
                        <textarea
                            name="description"
                            value={editedProfile.description}
                            onChange={handleEditChange}
                            placeholder="Description"
                        />
                        <Button onClick={handleSaveChanges}>
                            <div>Зберегти зміни</div>
                        </Button>
                        <Button onClick={() => setIsEditing(false)}>
                            <div>Закрити</div>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
