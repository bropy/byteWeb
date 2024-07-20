import styles from '../../styles/AboutProject.module.css';
import text from '../../styles/Text.module.css';


const AboutProject = () => {
    return (
        <div className={styles.aboutProjectDiv}>
            <div>
                ПРО ПРОЄКТ
            </div>
            <div className={styles.rightColumn}>
                <div className={`${text.textMediumSmall} ${text.fontWeight800} ${styles.marginLeft}`}>
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className={`${text.textMediumSmall} ${text.fontWeight800}`}>
                    Augue dignissim tincidunt risus lectus felis proin. Id duis consectetur adipiscing euismod enim tortor vitae. tincidunt ultrices nam ipsum. Platea volutpat adipiscing malesuada lorem lectus enim quis sit a.
                </div>
                <div className={styles.row}>
                    <div className={styles.textColumn}>
                        Lorem ipsum dolor sit amet consectetur. A diam facilisi fringilla sed in. Nec et accumsan cursus porta amet nam dolor dui.
                    </div>
                    <div className={styles.textColumn}>
                        Nec et accumsan cursus porta amet nam dolor dui. Amet enim sed odio commodo elit turpis enim quam. Ultricies placerat odio adipiscing ut.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;