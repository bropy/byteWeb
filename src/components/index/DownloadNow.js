import styles from '../../styles/DownloadNow.module.css';
import ButtonDowload from './ButtonDownload';

const DownloadNow = () => {
  return (
    <div className={styles.downloadNowDiv}>
        <div className={styles.text}>
            ДОСИТЬ ГОРТАТИ. ЧАС ЗАВАНТАЖУВАТИ.
        </div>
        <ButtonDowload />
    </div>
  );
};

export default DownloadNow;