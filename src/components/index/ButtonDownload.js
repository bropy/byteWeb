import styles from '../../styles/ButtonDownload.module.css';
import imageSrc from '../../images/download_icon.svg'

const ButtonDownload = () => {
  const handleClick = () => {
    window.location.href = '/download';
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <img src={imageSrc}></img>
      <div>Завантажити</div>
    </div>
  );
};

export default ButtonDownload;