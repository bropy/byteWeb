import Prompt from './Prompt';
import AboutProject from './AboutProject';
import DownloadNow from './DownloadNow';
import styles from '../../styles/MainPageContent.module.css';
import text from '../../styles/Text.module.css';


const Content = () => {
    return (
        <div className={`${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <Prompt />
            <AboutProject />
            <div className={`${styles.elementLeft} ${styles.row}`}>
                <div className={styles.imageLeft} />
                <div className={`${styles.textLeft} ${styles.alignSelfEnd}`}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Lorem ipsum dolor
                    </div>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet consectetur. A diam facilisi fringilla sed in. Nec et accumsan cursus porta amet nam dolor dui.
                    </div>
                </div>
            </div>
            <div>
                <iframe className={styles.video}
                src="https://www.youtube.com/embed/uV0zfAwazcs?si=T-tl1hCfMjR2WhCi" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className={`${styles.elementRight} ${styles.row}`}>
                <div className={`${styles.textRight} ${styles.alignSelfEnd}`}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Lorem ipsum dolor
                    </div>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet consectetur. A diam facilisi fringilla sed in. Nec et accumsan cursus porta amet nam dolor dui.
                    </div>
                </div>
                <div className={styles.imageRight} />
            </div>
            <div className={`${styles.elementLeft} ${styles.row}`}>
                <div className={styles.imageLeft} />
                <div className={`${styles.textLeft} ${styles.alignSelfEnd}`}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Lorem ipsum dolor
                    </div>
                    <br />
                    <div>
                        Lorem ipsum dolor sit amet consectetur. A diam facilisi fringilla sed in. Nec et accumsan cursus porta amet nam dolor dui.
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${text.textMedium} ${text.fontWeight800} ${styles.text1}`}>
                        Lorem ipsum
                    </div>
                    <div className={`${styles.row} ${styles.alignSelfEnd}`}>
                        <div>
                            Lorem ipsum amet consectetur.
                        </div>
                        <div className={`${styles.arrowRight} ${styles.alignSelfCenter}`} />
                    </div>
                </div>
                <br />
                <div className={styles.row}>
                    <div className={styles.elementThick}>
                        <div className={styles.row}>
                            <div className={`${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                                Id duis consectetur adipiscing
                            </div>
                            <div className={`${text.textMedium} ${text.fontWeight200}`}>
                                01
                            </div>
                        </div>
                        <br />
                        <div>
                            Lorem ipsum dolor sit amet consectetur. A diam facilisi fringilla sed in. Nec et accumsan cursus porta amet nam dolor dui.
                        </div>
                        <br />
                        <div className={styles.image1} />
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            02
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            Id duis consectetur adipiscing
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            03
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            tincidunt ultrices nam ipsum
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            04
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            lorem lectus enim
                        </div>
                    </div>
                    <div className={styles.elementThin}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            05
                        </div>
                        <div className={`${text.textVertical} ${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800}`}>
                            tincidunt ultrices nam ipsum
                        </div>
                    </div>
                </div>
            </div>
            <DownloadNow />
        </div>
    );
};

export default Content;