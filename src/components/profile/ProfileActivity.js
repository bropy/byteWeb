import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileActivity.module.css';
import GameInfo from './GameInfo'

export default function ProfileMenu({activity}) {
    const { activityTotal = 0, lastGames = [] } = activity || {};
    
    return (
        <div className={`${positioning.column} ${styles.column}`}>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                <div className={`${text.upperCase} ${text.textMedium} ${text.fontWeight800}`}>
                    Остання активність
                </div>
                <div>
                    {`${activityTotal} год. останні 2 тижні`} 
                </div>
            </div>
            <br />
            <div className={styles.games}>
                {lastGames.length > 0 ? (
                    activity.lastGames.slice(0, 3).map((game) => (
                        <GameInfo key={game.id} game={game} />
                    ))
                ) : (
                    <div>
                        <br />
                        <div className={text.textCenter}>Немає нещодавно зіграних ігор</div>
                        <br />
                    </div>
                )}
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