import Prompt from './Prompt';
import AboutProject from './AboutProject';
import DownloadNow from './DownloadNow';
import styles from '../../styles/MainPageContent.module.css';
import text from '../../styles/Text.module.css';


const Content = () => {
    return (
        <div className={`${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <Prompt />
            <AboutProject />
            <div className={`${styles.elementLeft} ${styles.row}`}>
                <div className={styles.imageLeft} />
                <div className={`${styles.textLeft} ${styles.alignSelfEnd}`}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Великий вибір ігор                    
                    </div>
                    <br />
                    <div>
                        Знаходьте ігри для будь-якого настрою та смаку серед тисяч доступних проектів.
                    </div>
                </div>
            </div>
            <div>
                <iframe className={styles.video}
                src="https://www.youtube.com/embed/uV0zfAwazcs?si=T-tl1hCfMjR2WhCi" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={`${styles.elementRight} ${styles.row}`}>
                <div className={`${styles.textRight} ${styles.alignSelfEnd}`}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Зручність використання
                    </div>
                    <br />
                    <div>
                        Інтуїтивно зрозумілий інтерфейс, який дозволяє швидко знаходити потрібну інформацію та легко керувати вашою бібліотекою ігор.
                    </div>
                </div>
                <div className={styles.imageRight} />
            </div>
            <div className={`${styles.elementLeft} ${styles.row}`}>
                <div className={styles.imageLeft} />
                <div className={`${styles.textLeft} ${styles.alignSelfEnd}`}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Підтримка спільноти
                    </div>
                    <br />
                    <div>
                        Долучайтеся до активної спільноти геймерів, обговорюйте ігри, отримуйте допомогу та поради, діліться своїми досягненнями.
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${text.textMedium} ${text.fontWeight800} ${styles.text1}`}>
                        Lorem ipsum
                    </div>
                    <div className={`${styles.row} ${styles.alignSelfEnd}`}>
                        <div>
                            Lorem ipsum amet consectetur.
                        </div>
                        <div className={`${styles.arrowRight} ${styles.alignSelfCenter}`} />
                    </div>
                </div>
                <br />
                <div className={styles.row}>
                    <div className={styles.elementThick}>
                        <div className={styles.row}>
                            <div className={`${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                                Точна дата релізу S.T.A.L.K.E.R 2
                            </div>
                            <div className={`${text.textMedium} ${text.fontWeight200}`}>
                                01
                            </div>
                        </div>
                        <br />
                        <div>
                            Досліджуйте Чорнобильську Зону Відчуження повну небезпечних ворогів, смертельних аномалій та поту...
                        </div>
                        <br />
                        <div className={styles.image1} />
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            02
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            Kingdom Come: <br/> Deliverance II 
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            03
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            Manor Lords
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            04
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            Dwarf Fortress
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            05
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            Metal Gear Rising: <br/> Revengeance
                        </div>
                    </div>
                </div>
            </div>
            <AboutProject />
            <DownloadNow />
        </div>
    );
};

export default Content;