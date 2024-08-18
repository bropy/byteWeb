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
        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.profileInfo}`}>
            <div className={styles.profileAvatar} />
            <div className={`${positioning.column} ${styles.column} ${positioning.justifyBetween}`}>
                <div>
                    <div className={`${text.textMedium} ${text.fontWeight800}`}>
                        {nickname}
                    </div>
                    <div className={styles.marginVertical}>
                        Країна: {country}
                    </div>
                    <div>
                    {about}
                    </div>
                </div>
                <div>
                    <div className={`${positioning.row} ${styles.marginVertical}`}>
                        <div>
                            Статус:&nbsp;
                        </div>
                        <div className={`${text.uppercase} ${text.fontWeight800}`}>
                            {state}
                        </div>
                    </div>
                    {user && 
                    <div className={`${button.button} ${button.black} ${styles.marginVertical}`} 
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