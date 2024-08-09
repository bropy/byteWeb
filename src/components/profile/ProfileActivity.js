import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileActivity.module.css';
import GameInfo from './GameInfo'

export default function ProfileMenu({user}) {

    return (
        <div className={`${positioning.column} ${styles.column}`}>
            <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                <div className={`${text.upperCase} ${text.fontWeight800}`}>
                    Остання активність
                </div>
                <div>
                    17 год. останні 2 тижні
                </div>
            </div>
            <br />
            <div className={styles.games}>
                <GameInfo />
                <GameInfo />
                <GameInfo />
            </div>
            <br />
            <div className={`${positioning.row} ${positioning.justifyEnd}`}>
                <div>
                    Переглянути
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWidth700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Нещодавно зіграні
                </div>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWidth700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Бажане
                </div>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWidth700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Рецензії
                </div>
            </div>
        </div>
    );
};