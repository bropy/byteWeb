import ButtonDowload from '../layout/ButtonDownload';
import styles from '../../styles/DownloadNow.module.css';
import text from '../../styles/Text.module.css';


const DownloadNow = () => {
  return (
    <div className={styles.downloadNowDiv}>
        <div className={`${styles.text} ${text.textMedium} ${text.fontWeight800}`}>
            ДОСИТЬ ГОРТАТИ. ЧАС ЗАВАНТАЖУВАТИ.
        </div>
        <ButtonDowload />
    </div>
  );
};

export default DownloadNow;