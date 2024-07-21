import styles from '../../styles/Prompt.module.css';
import ButtonDowload from './ButtonDownload';
import text from '../../styles/Text.module.css';


const Prompt = () => {
 
  return (
    <div className={`${styles.promptDiv}`}>
      <div className={styles.row}>      
        <div className={`${text.textLarge} ${text.fontWeight800} ${styles.left}`}>
          ЗРУЧНІСТЬ
        </div>
        <div className={styles.decorativeSquares} />
      </div>
      <div className={`${text.textLarge} ${text.fontWeight800} ${styles.right}`}>
        & ШВИДКІСТЬ
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>
            <div className={`${text.fontWeight800} ${styles.left}`}>
              ВИБІР БЕЗ МЕЖ
            </div>
            <br />
            <div className={`${styles.left}`}>
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