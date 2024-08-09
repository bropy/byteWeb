import button from '../../styles/Button.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/ProfileInfo.module.css';
import positioning from '../../styles/Positioning.module.css';


export default function ProfileInfo({user}) {
    const handleClick = () => {
        //ToDo 
    };

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween} ${styles.profileInfo}`}>
            <div className={styles.profileAvatar} />
            <div className={`${positioning.column} ${styles.column} ${positioning.justifyBetween}`}>
                <div>
                    <div className={`${text.textMedium} ${text.fontWeight800}`}>
                        {user != null ? user.nickname : 'Not Found'}
                    </div>
                    <div>
                        Країна: {user != null ? user.country : 'Not Found'}
                    </div>
                    <div>
                    {user != null ? user.about : 'Not Found'}
                    </div>
                </div>
                <div>
                    <div className={positioning.row}>
                        <div>
                            Статус:&nbsp;
                        </div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            {user != null ? user.state : 'Non'}
                        </div>
                    </div>
                    <br />
                    {user != null && 
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