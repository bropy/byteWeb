import styles from '../../styles/AboutProject.module.css';
import text from '../../styles/Text.module.css';


const AboutProject = () => {
    return (
        <div className={styles.aboutProjectDiv}>
            <div>
                ПРО ПРОЄКТ
            </div>
            <div className={styles.rightColumn}>
                <div className={`${text.textMediumSmall} ${text.fontWeight800}`}>
                    Byte - це інноваційна платформа цифровох дистрибуції, створена для геймірів усього світу. Наша Мета - забезпечити зручний та доступний спосіб придбання, збереження та гри в улюблені відеоігри.                </div>
                <div className={styles.row}>
                    <div className={styles.textColumn}>
                        Byte об´єднує геймерів, розробників та ентузіастів ігор на одній платформі. Ми пропонуємо широкий асортимент ігор різних жанрів та рівнів склідності, що задовольнять як новачків, так і досвідчених гравців.                    </div>
                    <div className={styles.textColumn}>
                        Наша платформа підтримує регулярні оновлення, нові релізи та ексклюзивні пропозиції, щоб ви завжди мали доступ до найкращих ігор.                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;