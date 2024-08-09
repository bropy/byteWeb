import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/GameInfo.module.css';


export default function GameInfo({game}) {

    return (
        <div className={`${positioning.row} ${styles.gameInfo}`}>
            <div className={styles.image} />
            <div className={`${positioning.column} ${styles.info}`}>
                <div className={`${text.fontWidth700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Batman: Arkham Asylum GOTY Edition
                </div>
                <br />
                <div>
                    11,5 год. загалом
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    Востаннє зіграно 23 липня
                </div>
                <div className={styles.line} />
                <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                    <div className={styles.interactive}
                        onClick={() => window.location.href = '/'}>
                        Здобуття досягнень 18 з 47
                    </div>
                    <progress value="18" max="47" className={styles.progress}></progress>
                </div>
            </div>
        </div>
    );
};