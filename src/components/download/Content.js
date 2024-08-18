import ButtonMoreAbout from '../layout/ButtonMoreAbout'
import ButtonDownload from '../layout/ButtonDownload'
import styles from '../../styles/DownloadPageContent.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'


const Content = () => {
    return (
        <div className={`${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={styles.container}>
                <div className={`${text.textLarge} ${text.uppercase} ${text.fontWeight800}`}>
                    byte ДЛЯ твого ПРИСТРОЮ
                </div>
                <div className={styles.row}>
                    <div className={`${positioning.column} ${positioning.dynamic} ${positioning.justifyBetween}`}>
                        <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                            зручний додаток, доступний для завантаження на Android та Windows. Тепер ви можете легко та швидко купувати відеоігри, плагіни та програми безпосередньо зі свого пристрою.
                        </div>
                        <ButtonMoreAbout />
                    </div>   
                    <div className={styles.image1} />
                </div>
            </div>
            <div className={`${styles.container} ${styles.row}`}>
                <div className={styles.imageLeft} />
                <div className={`${positioning.column} ${positioning.dynamic} ${positioning.alignEnd}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800} ${text.alignRight}`}>
                        ЗАВАНТАЖИТИ ДЛЯ windows
                    </div>
                    <br />
                    <ButtonDownload />
                </div>
            </div>
            <div className={`${styles.container} ${styles.row}`}>
                <div className={`${positioning.column} ${positioning.dynamic}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800}`}>
                        ЗАВАНТАЖИТИ ДЛЯ ANDROID
                    </div>
                    <br />
                    <ButtonDownload />
                </div>
                <div className={styles.imageRight} />
            </div>
        </div>
    );
}

export default Content;