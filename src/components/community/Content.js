import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import search from '../../styles/layouts/Search.module.css'
import styles from '../../styles/community/Content.module.css'
import Link from 'next/link';
import Posts from './Posts'

export default function Content () {
    return (
        <div className={`${positioning.container} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${text.textLarge} ${text.fontWeight800} ${text.uppercase}`}>Діяльність</div>
            <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.uppercase} ${positioning.marginRight20}`}>
                    Контент від спільноти та розробників для всіх ігор і програм у Byte.
                </div>
                <div className={`${text.textLarge} ${text.fontWeight800} ${text.uppercase} ${positioning.marginLeft20}`}>Спільноти</div>
            </div>
            <form className={search.form}>
                <button type='submit'>
                    <div className={search.searchIcon} />
                </button>
                <input type='text' id='support_input' name='support_input' 
                    placeholder='Пошук (центр спільноти/люди)' className={search.input} />
            </form>
            <Posts/>
        </div>
    );
}