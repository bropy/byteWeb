import styles from '../../styles/CommunityPageContent.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'


const Content = () => {
    return (
        <div className={`${styles.container} ${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${text.textLarge} ${text.fontWeight800} ${text.textUppercase}`}>Діяльність</div>
            <div className={styles.row}>
                <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.textUppercase}`}>
                    Контент від спільноти та розробників для всіх ігор і програм у Byte.
                </div>
                <div className={`${text.textLarge} ${text.fontWeight800} ${text.textUppercase}`}>Спільноти</div>
            </div>
            <form className={styles.form}>
                <button type='submit'>
                    <div className={styles.searchIcon} />
                </button>
                <input type='text' id='support_input' name='support_input' 
                placeholder='Пошук (центр спільноти/люди)' className={styles.input} />
            </form>

        </div>
    );
}

export default Content;