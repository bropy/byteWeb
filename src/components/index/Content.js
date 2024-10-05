import React, { useState, useEffect } from 'react';

import Prompt from './Prompt';
import AboutProject from './AboutProject';
import News from './News';
import DownloadNow from './DownloadNow';

import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/index/Content.module.css';


export default function Content () {
    const [isDesktop, setIsDesktop] = useState(false);

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 520); 
    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize); 

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${text.textSmall} ${text.fontWeight600}`}>
            <Prompt isDesktop={isDesktop} />
            <div className={styles.space} />

            <AboutProject id='aboutProject' isDesktop={isDesktop} />
            <div className={styles.space} />

            <div className={`${positioning.container} ${styles.feature} ${positioning.justifyStart}`}>
                <div className={styles.imageLeft1} />
                <div className={`${styles.textLeft}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800}`}>
                        Великий вибір ігор                    
                    </div>
                    <br />
                    <div>
                        Знаходьте ігри для будь-якого настрою та смаку серед тисяч доступних проектів.
                    </div>
                </div>
            </div>
            <div className={styles.space} />

            <div id='brand'>
                <iframe className={`${positioning.container} ${styles.video}`}
                src="https://www.youtube.com/embed/F9tprUGf45k" 
                title="Byte - промо-ролік" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={styles.space} />

            <div className={`${positioning.container} ${styles.feature} ${positioning.justifyEnd}`}>
                <div className={`${styles.textRight}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800}`}>
                        Зручність використання
                    </div>
                    <br />
                    <div>
                        Інтуїтивно зрозумілий інтерфейс, який дозволяє швидко знаходити потрібну інформацію та легко керувати вашою бібліотекою ігор.
                    </div>
                </div>
                <div className={styles.imageRight2} />
            </div>
            <div className={styles.space} />

            <div className={`${positioning.container} ${styles.feature} ${positioning.justifyStart}`}>
                <div className={styles.imageLeft} />
                <div className={`${styles.textLeft}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800}`}>
                        Підтримка спільноти
                    </div>
                    <br />
                    <div>
                        Долучайтеся до активної спільноти геймерів, обговорюйте ігри, отримуйте допомогу та поради, діліться своїми досягненнями.
                    </div>
                </div>
            </div>
            <div className={styles.space} />

            <News isDesktop={isDesktop} />
            <div className={styles.space} />

            <AboutProject isDesktop={isDesktop} />
            <div className={styles.space} />

            <DownloadNow isDesktop={isDesktop} />
        </div>
    );
};