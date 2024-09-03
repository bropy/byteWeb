import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileActivity.module.css';
import GameInfo from './GameInfo'

export default function ProfileActivity({activity}) {
    const { activityTotal = 0, lastGames = [] } = activity || {};
    
    return (
        <div>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter} ${styles.title}`}>
                <div className={`${text.upperCase} ${text.textMedium} ${text.fontWeight800}`}>
                    Остання активність
                </div>
                <div>
                    {`${activityTotal} год. останні 2 тижні`} 
                </div>
            </div>
            <div className={styles.games}>
                {lastGames.length > 0 ? (
                    activity.lastGames.slice(0, 3).map((game) => (
                        <div key={game.id} >
                            <GameInfo game={game} />
                            <div className={styles.line} />
                        </div>
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
            <div className={`${positioning.row}`}>
                <div>
                    Переглянути
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWeight700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Нещодавно зіграні
                </div>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWeight700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Бажане
                </div>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWeight700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Рецензії
                </div>
            </div>
        </div>
    );
};