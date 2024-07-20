import styles from '../../styles/Prompt.module.css';
import imageSrc from '../../images/squares.png'
import ButtonDowload from './ButtonDownload';


const Prompt = () => {
 
  return (
    <div className={styles.promptDiv}>
      <div className={styles.row}>      
        <div className={`${styles.text} ${styles.textLarge} ${styles.fontWeight800} ${styles.left}`}>
          ЗРУЧНІСТЬ
        </div>
        <img src={imageSrc} className={styles.squares}/>
      </div>
      <div className={`${styles.text} ${styles.textLarge} ${styles.fontWeight800} ${styles.right}`}>
        & ШВИДКІСТЬ
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>
            <div className={`${styles.text} ${styles.textSmall} ${styles.fontWeight800} ${styles.left}`}>
              ВИБІР БЕЗ МЕЖ
            </div>
            <div className={`${styles.text} ${styles.textSmall} ${styles.fontWeight600} ${styles.left}`}>
              Чудова платформа для гравців та розробників
            </div>
          </div>
          <ButtonDowload/>
        </div>
        <div className={`${styles.image} ${styles.right}`}></div>
      </div>
    </div>
    );
  };
  
export default Prompt;