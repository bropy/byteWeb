import styles from '../../styles/Footer.module.css';


const Footer = () => {
 
    return (
        <div className={`${styles.footerDiv} ${styles.row}`}>
            <div className={styles.column}>
                <div className={`${styles.logo} ${styles.interactive}`} 
                onClick={() => window.location.href = '/'}></div>
                <div className={`${styles.interactive} ${styles.fontWeight700}`} 
                onClick={() => window.location.href = '/'}>
                    Соціальні мережі
                </div>
            <div className={styles.row}>
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
            <div className={styles.column}>
                <div className={`${styles.interactive} ${styles.fontWeight700}`} 
                onClick={() => window.location.href = '/'}>
                    Продукт
                </div>
                <br />
                <div className={styles.column}>
                    <div className={styles.interactive} onClick={() => window.location.href = '/community'}>
                        Спільнота
                    </div>
                    <div className={styles.interactive} onClick={() => window.location.href = '/download'}>
                        Завантаження
                    </div>
                    <div className={styles.interactive} onClick={() => window.location.href = '/support'}>
                        Підтримка
                    </div>
                </div>
            </div>
                <div className={styles.column}>
                    <div className={`${styles.interactive} ${styles.fontWeight700}`} 
                    onClick={() => window.location.href = '/'}>
                        Компанія
                    </div>
                    <br />
                    <div className={styles.column}>
                        <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                            Про
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                            Робота/Вакансії
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                            Бренд
                        </div>
                        <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                            Новини
                        </div>
                    </div>
                </div>
            <div className={styles.column}>
                <div className={`${styles.interactive} ${styles.fontWeight700}`} 
                onClick={() => window.location.href = '/'}>
                    Політика
                </div>
                <br />
                <div className={styles.column}>
                    <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                        Політика конфіденційності
                    </div>
                    <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                        Правова інформація
                    </div>
                    <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                        Повернення
                    </div>
                    <div className={styles.interactive} onClick={() => window.location.href = '/'}>
                        Файли Cockie
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Footer;