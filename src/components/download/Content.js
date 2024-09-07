import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/download/DownloadPageContent.module.css'

import ButtonDownload from '../layout/ButtonDownload'
import Button from '../layout/Button'

import { useLanguage } from '../../contexts/LanguageContext';


export default function Content () {
    const { translations } = useLanguage();

    return (
        <div className={`${positioning.container} ${text.uppercase} ${text.fontWeight800}`}>
            <div className={`${positioning.column} ${styles.block}`}>
                <div className={`${text.textLarge}`}>
                    BYTE для твого пристрою
                </div>
                <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrapReverse} ${styles.marginBottom}`}>
                    <div className={`${positioning.column} ${positioning.justifyBetween} ${positioning.dynamic} ${styles.marginTop}`}>
                        <div className={`${text.textMediumSmall}`}>
                                Зручний додаток, доступний для завантаження на Android та Windows. Тепер ви можете легко та швидко купувати відеоігри, плагіни та програми безпосередньо зі свого пристрою.
                        </div>
                        <div>
                            <br/><br/>
                            <Button href="/">
                                <div>{translations.seeMore || 'Подивитись більше'}</div>
                            </Button>
                            <br/>
                            <div className={`${mainStyle.interactive} ${text.textGray} ${text.textSmall} 
                                ${text.caseNone} ${text.fontWeight600} ${text.underline}`}
                                onClick={() => window.location.href = '/download'}>
                                Перейти на веб-версію додатку
                            </div>
                        </div>
                    </div>
                    <div className={styles.image1} />
                </div>
            </div>
            

            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.marginBottom}`}>
                <div className={styles.image2} />
                <div className={`${positioning.column} ${positioning.dynamic} ${positioning.alignEnd}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.alignRight} ${styles.marginVertical}`}>
                        Завантажити для Windows
                    </div>
                    <ButtonDownload />
                </div>
            </div>

            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrapReverse}`}>
                <div className={`${positioning.column} ${positioning.dynamic}`}>
                    <div className={`${text.textMedium} ${styles.marginVertical}`}>
                        Завантажити для Android
                    </div>
                    <ButtonDownload />
                </div>
                <div className={styles.image3} />
            </div>
        </div>
    );
}