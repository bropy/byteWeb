import button from '../../styles/Button.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/ProfileInfo.module.css';
import positioning from '../../styles/Positioning.module.css';


export default function ProfileInfo({user}) {
    const { nickname = 'Not Found', country = 'Not Found', about = 'Not Found', state = 'Non' } = user || {};

    const handleClick = () => {
        //ToDo 
    };

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween} ${styles.profileInfo}`}>
            <div className={styles.profileAvatar} />
            <div className={`${positioning.column} ${styles.column} ${positioning.justifyBetween}`}>
                <div>
                    <div className={`${text.textMedium} ${text.fontWeight800}`}>
                        {nickname}
                    </div>
                    <div>
                        Країна: {country}
                    </div>
                    <div>
                    {about}
                    </div>
                </div>
                <div>
                    <div className={positioning.row}>
                        <div>
                            Статус:&nbsp;
                        </div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            {state}
                        </div>
                    </div>
                    <br />
                    {user && 
                    <div className={`${button.button} ${button.black}`} 
                        onClick={handleClick}>
                        <div className={`${text.textWhite} ${text.fontWeight700}`}>
                            Редагувати профіль
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};