import { useLanguage } from '../../contexts/LanguageContext';

import ButtonDownload from '../layouts/ButtonDownload'
import Button from '../layouts/Button'

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/download/Content.module.css'


export default function Content () {
    const { translations } = useLanguage();

    return (
        <div className={`${positioning.container} ${text.uppercase} ${text.fontWeight800}`}>
            <div className={`${positioning.column} ${styles.block}`}>
                <div className={`${text.textLarge}`}>
                    BYTE для твого пристрою
                </div>
                <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrapReverse} ${styles.marginBottom}`}>
                    <div className={`${positioning.column} ${positioning.justifyBetween} ${positioning.dynamic} ${positioning.marginTop20}`}>
                        <div className={`${text.textMediumSmall}`}>
                                Зручний додаток, доступний для завантаження на Android та Windows. Тепер ви можете легко та швидко купувати відеоігри, плагіни та програми безпосередньо зі свого пристрою.
                        </div>
                        <div>
                            <br/><br/>
                            <div className={styles.button}>
                                <Button href="/">
                                    <div>{translations.seeMore || 'Подивитись більше'}</div>
                                </Button>
                            </div>
                            <br/>
                            <div className={`${mainStyle.interactive} ${text.textLightGray} ${text.textSmall} 
                                ${text.caseNone} ${text.fontWeight600} ${text.underline}`}
                                onClick={() => window.location.href = '/store'}>
                                Перейти на веб-версію додатку
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.image1} ${positioning.dynamic}`} />
                </div>
            </div>

            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.marginBottom}`}>
                <div className={`${styles.image2} ${positioning.dynamic}`}/>
                <div className={`${positioning.column} ${positioning.dynamic} ${positioning.alignEnd} ${styles.downloadWindow}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.alignRight} ${positioning.marginVertical20}`}>
                        Завантажити для Windows
                    </div>
                    <div className={styles.button}>
                        <ButtonDownload />
                    </div>
                </div>
            </div>

            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrapReverse}`}>
                <div className={`${positioning.column} ${positioning.dynamic}`}>
                    <div className={`${text.textMedium} ${positioning.marginVertical20}`}>
                        Завантажити для Android
                    </div>
                    <div className={styles.button}>
                        <ButtonDownload />
                    </div>
                </div>
                <div className={`${styles.image3} ${positioning.dynamic}`} />
            </div>
        </div>
    );
}