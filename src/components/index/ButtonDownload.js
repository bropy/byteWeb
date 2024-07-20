import styles from '../../styles/ButtonDownload.module.css';

const ButtonDownload = () => {
  const handleClick = () => {
    window.location.href = '/download';
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <div className={styles.downloadIcon} />
      <div>Завантажити</div>
    </div>
  );
};

export default ButtonDownload;