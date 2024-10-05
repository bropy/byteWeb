import { useLanguage } from '../../contexts/LanguageContext';

import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/layouts/Footer.module.css';


export default function Footer () {
    const { translations } = useLanguage();

    return (
        <div className={`${styles.footerDiv} ${styles.gridContainer}`}>
            <div className={`${styles.gridItem}`}>
                <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                    <div className={`${styles.logo} ${styles.interactive}`} 
                        onClick={() => window.location.href = '/'} />
                    <br />
                    <div className={`${styles.interactive} ${text.fontWeight700} ${text.alignLeft}`} 
                        onClick={() => window.location.href = '/'}>
                        {translations.socialMedia || 'Соціальні мережі'}
                    </div>
                    <div className={`${positioning.row} ${positioning.alignStart} ${positioning.justifyEvenly}`}>
                        <div className={`${styles.social} ${styles.instagram} ${styles.interactive} `}
                        onClick={() => window.location.href = 'https://www.instagram.com/'}></div>
                        <div className={`${styles.social} ${styles.facebook} ${styles.interactive} `}
                        onClick={() => window.location.href = 'https://facebook.com/'}></div>
                        <div className={`${styles.social} ${styles.youtube} ${styles.interactive} `}
                        onClick={() => window.location.href = 'https://www.youtube.com/'}></div>
                        <div className={`${styles.social} ${styles.x} ${styles.interactive} `}
                        onClick={() => window.location.href = 'https://www.x.com/'}></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.gridItem}`}>
                <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                    <div className={`${text.fontWeight700}`} >
                        {translations.product || 'Продукт'}
                    </div>
                    <br />
                    <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                        <div className={styles.interactive} onClick={() => window.location.href = '/community'}>
                            {translations.community || 'Спільнота'}
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/download'}>
                            {translations.download || 'Завантаження'}
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/support'}>
                            {translations.support || 'Підтримка'}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.gridItem}`}>
                <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                    <div className={`${text.fontWeight700}`}>
                        {translations.company || 'Компанія'}
                    </div>
                    <br />
                    <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                        <div className={`${styles.interactive} ${text.alignLeft}`} onClick={() => window.location.href = '/#aboutProject'}>
                            {translations.aboutUs || 'Про нас'}
                        </div>
                        <div className={`${styles.interactive} ${text.alignLeft}`} onClick={() => window.location.href = '/vacancies'}>
                            {translations.jobs || 'Робота/Вакансії'}
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/#brand'}>
                            {translations.brand || 'Бренд'}
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/#news'}>
                            {translations.news || 'Новини'}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.gridItem}`}>
            <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                    <div className={`${text.fontWeight700}`}>
                        {translations.policy || 'Політика'}
                    </div>
                    <br />
                    <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
                        <div className={`${styles.interactive} ${text.alignLeft}`} onClick={() => window.location.href = '/privacy'}>
                            {translations.privacyPolicy || 'Політика конфіденційності'}
                        </div>
                        <div className={`${styles.interactive} ${text.alignLeft}`} onClick={() => window.location.href = '/legal'}>
                            {translations.legalInformation || 'Правова інформація'}
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/refund'}>
                            {translations.returns || 'Повернення'}
                        </div>
                        <div className={`${styles.interactive} ${text.alignLeft}`} onClick={() => window.location.href = '/coockie'}>
                            {translations.cookies || 'Файли Coockie'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};