import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import button from '../../styles/Button.module.css';
import styles from '../../styles/profile/ProfileInfo.module.css';

import { useRouter } from 'next/router';
import { fetchData } from '../../pages/api/profileApi';


export default function ProfileInfo({profile}) {

    const handleClick = () => {
        //ToDo 
    };

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.profileInfo}`}>
            <img 
                src={profile.avatar || "https://static.vecteezy.com/system/resources/previews/011/995/267/non_2x/8-bit-pixel-character-game-illustration-vector.jpg"} 
                alt={profile.nickname} 
                className={styles.profileAvatar}
                style={{
                width: '200px', 
                height: '200px', 
                objectFit: 'cover'
                }}
            />
            <div className={`${positioning.column} ${styles.column} ${positioning.justifyBetween}`}>
                <div>
                    <div className={`${text.textMedium} ${text.fontWeight800}`}>
                    {profile.nickname || "No data"}
                    </div>
                    <div className={styles.marginVertical}>
                        Країна: {profile.country|| "No data"}
                    </div>
                    <div>
                    <p>{profile.description || "No data"}</p>
                    </div>
                </div>
                <div>
                    <div className={`${positioning.row} ${styles.marginVertical}`}>
                        <div>
                            Статус:&nbsp;
                        </div>
                        <div className={`${text.uppercase} ${text.fontWeight800}`}>
                            <p>{profile.status|| "No data"}</p>
                        </div>
                    </div>
                    <div className={`${button.button} ${button.black} ${styles.marginVertical}`} 
                        >
                        <div className={`${text.textWhite} ${text.fontWeight700}`}>
                            Редагувати профіль
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};