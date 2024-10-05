import React from 'react';
import Link from 'next/link';
import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/ProfileInfo.module.css';

export default function ProfileInfo({ profile, currentUser }) {
    const isOwnProfile = currentUser && currentUser.id === profile.id;

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
                    {isOwnProfile && (
                        <Link href={`/update-profile`} className={styles.editProfileLink}>
                            Редагувати профіль
                        </Link>
                    )}
                    {!isOwnProfile && (
                        <Link href="#" className={styles.editProfileLink}>
                            Слідкувати
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}