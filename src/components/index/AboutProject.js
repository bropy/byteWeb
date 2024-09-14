import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/index/AboutProject.module.css';


export default function AboutProject ({ isDesktop }) {
    return (
        <div className={`${positioning.container} ${isDesktop && positioning.row} ${positioning.justifyBetween}`}>
            <div className={`${text.fontWeight800} ${positioning.marginBottom20}`} style={{ flex: `1` }}>
                ПРО ПРОЄКТ
            </div>
            <div className={styles.rightColumn} style={{ flex: `3` }}>
                <div className={`${text.textMediumSmall} ${text.fontWeight800}`}>
                    Byte - це інноваційна платформа цифровох дистрибуції, створена для геймірів усього світу. 
                    Наша Мета - забезпечити зручний та доступний спосіб придбання, збереження та гри в улюблені відеоігри.</div>
                <div className={`${positioning.row} ${positioning.justifyEnd} ${positioning.marginTop20}`}>
                    <div className={styles.textColumn}>
                        Byte об´єднує геймерів, розробників та ентузіастів ігор на одній платформі. 
                        Ми пропонуємо широкий асортимент ігор різних жанрів та рівнів склідності, 
                        що задовольнять як новачків, так і досвідчених гравців.</div>
                    <div className={styles.textColumn}>
                        Наша платформа підтримує регулярні оновлення, нові релізи та ексклюзивні пропозиції, 
                        щоб ви завжди мали доступ до найкращих ігор.</div>
                </div>
            </div>
        </div>
    );
};