import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/GameInfo.module.css';

export default function GameInfo({game, screenshots}) {
    if (!game) {
        return null; 
    }

    const { id, title = 'Untitled Game', time = 'N/A', lastPlay = 'N/A', achivements } = game;

    const handleTitleClick = () => {
        window.location.href = `/app/${id}`;
    };

    const handleAchievementsClick = () => {
        window.location.href = `/app/${id}/achivements`;
    };

    return (
        <div className={`${positioning.row} ${styles.gameInfo}`}>
            <div className={styles.image} alt={`${title} thumbnail`} />
            <div className={`${positioning.column} ${styles.info}`}>
                <div 
                    className={`${text.textMediumSmall} ${text.fontWidth800} ${styles.interactive}`}
                    onClick={handleTitleClick}
                >
                    {title}
                </div>
                <div className={`${positioning.row} ${positioning.alignCenter} ${styles.marginVertical}`}>
                    <div className={text.noWrap}>{`${time} год. загалом`}</div>
                    <div className={styles.separator}>|</div>
                    <div>{`Востаннє зіграно ${lastPlay}`}</div>
                </div>
                {!screenshots && achivements != null && (
                    <div> 
                        <div className={styles.line} />
                        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                            <div 
                                className={styles.interactive}
                                onClick={handleAchievementsClick}
                            >
                                {`Здобуття досягнень  ${achivements.unlocked} з ${achivements.total}`}
                            </div>
                            <progress 
                                value={achivements.unlocked} 
                                max={achivements.total} 
                                className={styles.progress} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}