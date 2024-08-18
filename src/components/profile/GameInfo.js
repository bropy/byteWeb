import React, { useRef, useState, useEffect } from 'react';
import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/GameInfo.module.css';


export default function GameInfo({game, screenshots}) {

    if (!game) {
        return null; 
    }

    const { id, title = 'Untitled Game', time = 'N/A', lastPlay = 'N/A', achivements } = game;

    const totalScreenshots = screenshots ? screenshots.length : 0;
    const [visibleScreenshots, setVisibleScreenshots] = useState(0);
    const screenshotContainerRef = useRef(null);

    const calculateVisibleScreenshots = () => {
        if (screenshotContainerRef.current) {
            const containerWidth = screenshotContainerRef.current.offsetWidth;
            const screenshotWidth = 70; 
            const numberOfScreenshots = Math.floor(containerWidth / screenshotWidth);
            setVisibleScreenshots(numberOfScreenshots);
        }
    };

    useEffect(() => {
        calculateVisibleScreenshots();
        window.addEventListener('resize', calculateVisibleScreenshots);

        return () => {
            window.removeEventListener('resize', calculateVisibleScreenshots);
        };
    }, []);

    const remainingScreenshots = totalScreenshots - visibleScreenshots;


    return (
        <div className={`${positioning.row} ${styles.gameInfo}`}>
            <div className={styles.image} alt={`${title} thumbnail`} />
            <div className={`${positioning.column} ${styles.info}`}>
                <div className={`${text.textMediumSmall} ${text.fontWidth800} ${styles.interactive}`}
                    onClick={() => window.location.href = `/app/${id}`}>
                    {title}
                </div>
                <div className={`${positioning.row} ${positioning.alignCenter} ${styles.marginVertical}`}>
                    <div className={text.noWrap}>{`${time} год. загалом`}</div>
                    <div className={styles.separator}>|</div>
                    <div>{`Востаннє зіграно ${lastPlay}`}</div>
                </div>
                {!screenshots && achivements != null && (
                    <div > 
                        <div className={styles.line} />
                        <div className={`${positioning.row} ${positioning.justifyBetween} 
                            ${positioning.alignCenter} ${positioning.wrap}`}>
                            <div className={`${styles.achivementsCounter} ${styles.interactive} 
                                ${positioning.row} ${text.noWrap}`}
                                onClick={() => window.location.href = `/app/${id}/achivements`}>
                                Здобуття досягнень&nbsp;
                                <div className={text.fontWeight700}>{achivements.unlocked}</div>
                                &nbsp;з&nbsp;
                                <div className={text.fontWeight700}>{achivements.total}</div>
                            </div>
                            <progress value={achivements.unlocked} max={achivements.total} 
                                className={`${styles.progress} ${positioning.dynamic}`} />
                        </div>
                    </div>
                )}
                {screenshots && totalScreenshots > 0 && (
                    <div>
                        <div className={`${text.fontWeight700} ${styles.interactive}`}>
                            Знімки екрана {totalScreenshots}
                        </div>
                        <div ref={screenshotContainerRef} className={`${positioning.row} ${styles.marginVertical}`}>
                            {screenshots.slice(0, visibleScreenshots).map((screenshot, index) => (
                                <div key={index} className={`${styles.screenshot} ${styles.interactive}`} />
                            ))}
                            {remainingScreenshots > 0 && (
                                <div className={`${styles.moreScreenshots} ${text.fontWeight700} ${styles.interactive}`}>
                                    +{remainingScreenshots}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};