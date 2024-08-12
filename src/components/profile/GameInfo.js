import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/GameInfo.module.css';


export default function GameInfo({game}) {
    if (!game) {
        return null; 
    }

    const { id, title = 'Untitled Game', time = 'N/A', lastPlay = 'N/A', achivements } = game;

    return (
        <div className={`${positioning.row} ${styles.gameInfo}`}>
            <div className={styles.image} alt={`${title} thumbnail`} />
            <div className={`${positioning.column} ${styles.info}`}>
                <div className={`${text.textMediumSmall} ${text.fontWidth800} ${styles.interactive}`}
                    onClick={() => window.location.href = `/app/${id}`}>
                    {title}
                </div>
                <br />
                <div>
                    {`${time} год. загалом`}
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    {`Востаннє зіграно ${lastPlay}`}
                </div>
                {achivements != null && (
                    <div> 
                        <div className={styles.line} />
                        <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                            <div className={styles.interactive}
                                onClick={() => window.location.href = `/app/${id}/achivements`}>
                                {`Здобуття досягнень  ${achivements.unlocked} з ${achivements.total}`}
                            </div>
                            <progress value={achivements.unlocked} 
                                max={achivements.total} 
                                className={styles.progress} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};