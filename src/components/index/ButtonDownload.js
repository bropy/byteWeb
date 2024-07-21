import styles from '../../styles/ButtonDownload.module.css';
import text from '../../styles/Text.module.css';


const ButtonDownload = () => {
  const handleClick = () => {
    window.location.href = '/download';
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <div className={styles.downloadIcon} />
      <div className={`${text.textWhite} ${text.fontWeight700}`}>Завантажити</div>
    </div>
  );
};

export default ButtonDownload;