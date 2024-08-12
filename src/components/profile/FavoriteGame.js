import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileActivity.module.css';
import GameInfo from './GameInfo'

export default function ProfileActivity({activity}) {
    const { activityTotal = 0, lastGames = [] } = activity || {};
    
    return (
        <div>
            <div className={`${positioning.row}`}>
                <div className={`${text.upperCase} ${text.textMedium} ${text.fontWeight800}`}>
                    Улюблена гра
                </div>
            </div>
            <div className={styles.games}>
                
            </div>
            <br />
            <div className={`${positioning.row} ${positioning.justifyEnd}`}>
              
            </div>
        </div>
    );
};