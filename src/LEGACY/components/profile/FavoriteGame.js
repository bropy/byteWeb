import text from '../../../styles/Text.module.css';
import positioning from '../../../styles/Positioning.module.css';
import styles from '../../../styles/profile/FavoriteGame.module.css';
import GameInfo from './GameInfo'


export default function ProfileActivity({game, screenshots}) {
    return (
        <div>
            <div className={`${positioning.row} ${text.upperCase} ${text.textMedium} ${text.fontWeight800} ${styles.title}`}>
                Улюблена гра
            </div>
            <GameInfo key={game.id} game={game} screenshots={screenshots} />
        </div>
    );
};