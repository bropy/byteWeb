import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/index/News.module.css';


export default function News ({ isDesktop }) {
    return(
        <div className={`${positioning.container} ${positioning.row}`} >
            <div style={isDesktop ? { flex: 1 } : {}} />
            <div className={`${positioning.alignEnd} ${styles.container}`} style={{ flex: `3` }}>
                <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                    <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800} ${styles.textNews}`}>
                        Новини Byte
                    </div>
                    <div className={`${positioning.row} ${positioning.justifyBetween} ${styles.alignSelfEnd}`}>
                        <div>
                            Переглянути більше новин
                        </div>
                        <div className={`${styles.arrowRight} ${styles.alignSelfCenter}`} />
                    </div>
                </div>
                <br />
                <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                    <div className={styles.elementThick}>
                        <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                            <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
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
                        <div className={`${text.vertical} ${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                            Kingdom Come: <br/> Deliverance II 
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            03
                        </div>
                        <div className={`${text.vertical} ${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                            Manor Lords
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            04
                        </div>
                        <div className={`${text.vertical} ${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                            Dwarf Fortress
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            05
                        </div>
                        <div className={`${text.vertical} ${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                            Metal Gear Rising: <br/> Revengeance
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
