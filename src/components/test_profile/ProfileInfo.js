import Button from '../layouts/Button'

import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/ProfileInfo.module.css';
import positioning from '../../styles/Positioning.module.css';


export default function ProfileInfo({user}) {
    const { nickname = 'Not Found', country = 'Not Found', about = 'Not Found', state = 'Non' } = user || {};

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.profileInfo}`}>
            <div className={styles.profileAvatar} />
            <div className={`${positioning.column} ${styles.column} ${positioning.justifyBetween}`}>
                <div>
                    <div className={`${text.textMedium} ${text.fontWeight800}`}>
                        {nickname}
                    </div>
                    <div className={positioning.marginVertical20}>
                        Країна: {country}
                    </div>
                    <div>
                    {about}
                    </div>
                </div>
                <div>
                    <div className={`${positioning.row} ${positioning.marginVertical20}`}>
                        <div>
                            Статус:&nbsp;
                        </div>
                        <div className={`${text.uppercase} ${text.fontWeight800}`}>
                            {state}
                        </div>
                    </div>
                    {user && 
                    <Button href={'/'}>
                        <div>
                            Редагувати профіль
                        </div>
                    </Button>
                    }
                </div>
            </div>
        </div>
    );
};