import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/FavoriteGame.module.css';


export default function ProfileActivity({game}) {
    return (
        <div>
            <div className={`${positioning.row} ${text.upperCase} ${text.textMedium} ${text.fontWeight800} ${styles.title}`}>
                Улюблена гра
            </div>
        </div>
    );
};