import Button from '../layouts/Button'

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import search from '../../styles/layouts/Search.module.css'
import styles from '../../styles/page404/Content.module.css';


export default function Page404 () {
    return (
        <div className={positioning.container}>
            <div className={styles.container}>
                <div className={`${styles.image}`}/>
                <div className={styles.info}>
                    <div className={`${text.textMedium} ${text.fontWeight800} ${text.uppercase}`}>
                        Веб-сторінка під розробкою
                    </div>
                    <div className={`${text.fontWeight700}`}>
                        Ця веб-сторінка зараз проходить планове технічне обслуговування. Ми маємо повернутися незабаром.
                    </div>
                    <div className={styles.button}>
                        <Button href={'/'}>Повернутися на головну</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
