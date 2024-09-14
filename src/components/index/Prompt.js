import ButtonDowload from '../layout/ButtonDownload';

import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css';
import styles from '../../styles//index/Prompt.module.css';


export default function Prompt ({ isDesktop }) {
  return (
    <div className={`${positioning.container} ${positioning.column}`}>
      {isDesktop ? (
        <div >
          <div className={`${positioning.row} ${positioning.alignCenter} ${positioning.justifyBetween}`}>      
            <div className={`${text.textLarge} ${text.fontWeight800} ${styles.left}`}>
              ЗРУЧНІСТЬ
            </div>
            <div className={styles.decorativeSquares} />
          </div>
          <div className={`${positioning.row} ${positioning.alignStart} ${positioning.justifyEnd}`}>      
            <div className={`${text.textLarge} ${text.fontWeight800} ${styles.right}`}>
              &&nbsp;
            </div>
            <div className={`${text.textLarge} ${text.fontWeight800} ${styles.right}`}>
              ШВИДКІСТЬ
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={`${text.textLarge} ${text.fontWeight800} ${styles.smallerHeigth}`}>ЗРУЧНІСТЬ</div>
          <div className={`${text.textMedium} ${text.fontWeight800} ${styles.and}`}>&</div>
          <div className={`${text.textLarge} ${text.fontWeight800}`}>ШВИДКІСТЬ</div>
          <div className={`${positioning.row} ${positioning.justifyEnd}`}>
            <div className={`${styles.decorativeSquares} ${positioning.alignEnd}`} />
          </div> 
        </div>
      )}

      <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.marginTop20}`}>
        <div className={`${positioning.column} ${positioning.alignStart} ${positioning.justifyBetween}`}>
          <div style={{ marginBottom: `10px`}}>
            <div className={`${text.fontWeight800} ${styles.left}`} style={{ marginBottom: `10px`}}>
              ВИБІР БЕЗ МЕЖ
            </div>
            <div className={text.wrap}>
              Чудова платформа для гравців та розробників
            </div>
          </div>
          <ButtonDowload style={{ minWidth: `182px`}}/>
        </div>
        {isDesktop && <div className={`${styles.image}`} />}
      </div>
    </div>
  );
};