import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/GameInfo.module.css';
export default function GameInfo({game, screenshots}) {
    if (!game) {
        return null; 
    }

    const handleTitleClick = () => {
        window.location.href = `/app/${game.id}`;
    };

    const handleAchievementsClick = () => {
        window.location.href = `/app/${game.id}/achievements`;
    };

    return (
        <div className={`${positioning.row} ${styles.gameInfo}`}>
           {/* <div 
                className={styles.image} 
                style={{ backgroundImage: `url(${game.avatar})` }} 
                alt={`${game.title} thumbnail`} 
            />*/}
            <img 
                    src={game.avatar} 
                    alt={`${game.title} thumbnail`} 
                    className={styles.image} 
                    style={{ objectFit: 'cover' }} 
                />

            <div className={`${positioning.column} ${styles.info}`}>
                <div 
                    className={`${text.textMediumSmall} ${text.fontWidth800} ${styles.interactive}`}
                    onClick={handleTitleClick}
                >
                    {game.title}
                </div>
                <div className={`${positioning.row} ${positioning.alignCenter} ${styles.marginVertical}`}>
                    <div className={text.noWrap}>{`${game.playtimeHours} год. загалом`}</div>
                    <div className={styles.separator}>|</div>
                    <div>{`Востаннє зіграно ${new Date(game.lastPlayed).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}`}</div>
                </div>

                {game.achievements != null && (
                    <div> 
                        <div className={styles.line} />
                        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                            <div 
                                className={styles.interactive}
                                onClick={handleAchievementsClick}
                            >
                                {`Здобуття досягнень ${game.achievements.length} з ${game.total}`}
                            </div>
                            <progress 
                                value={game.achievements.length} 
                                max={game.total} 
                                className={styles.progress} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
