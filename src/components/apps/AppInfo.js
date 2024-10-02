import { useState, useMemo } from 'react'

import Button from '../layouts/Button'

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/apps/AppInfo.module.css'


export default function AppInfo ({app}) {
    const { title = 'Title Not Found', description = 'Descriptiom Not Found', 
        logo = '', trailer = '', screenshots = [], price = 0, 
        relaseDate = new Date().toLocaleDateString(), reviews = [],  } = app || {};

    return (
        <div className={`${styles.game}`}>
            <div className={`${text.textMedium} ${text.fontWeight800}`}>
                {title}
            </div>
            <div className={`${styles.gameInfo}`}>
                <div className={`${styles.media}`}>
                <div>
                    <iframe className={`${styles.video}`}
                    src="https://www.youtube.com/embed/uV0zfAwazcs?si=T-tl1hCfMjR2WhCi" 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                </div>
                <div className={`${styles.info}`}>
                    <div className={styles.logo}/>
                    <div className={`${styles.gap20}`}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            {price}₴
                        </div>
                        <div className={``}>
                            {description}
                        </div>
                    </div>
                    <div className={`${styles.gap20}`}>
                        <div className={`${positioning.row}`}>
                            <div>
                                ДАТА ВИХОДУ:&nbsp;
                            </div>
                            <div className={`${text.fontWeight700}`}>
                                {relaseDate}
                            </div>
                        </div>
                        <div className={`${positioning.row}`}>
                            <div>
                                УСІ РЕЦЕНЗІЇ:&nbsp;
                            </div>
                            <div className={`${text.fontWeight700}`}>
                                ({reviews.length})
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.gap20}`}>
                        <Button href={'/'}>Додати до кошика</Button>
                        <Button href={'/'} style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}>
                            Додати до бажаного
                        </Button>
                        <Button href={'/'} style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}>
                            Відстежувати
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}