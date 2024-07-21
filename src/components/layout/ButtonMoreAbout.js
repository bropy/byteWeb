import styles from '../../styles/ButtonMoreAbout.module.css';
import text from '../../styles/Text.module.css';


const ButtonMoreAbout = () => {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <div className={`${text.textBlack} ${text.fontWeight700}`}>Подивитись більше</div>
    </div>
  );
};

export default ButtonMoreAbout;