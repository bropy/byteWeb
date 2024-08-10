import button from '../../styles/Button.module.css';
import text from '../../styles/Text.module.css';


const ButtonMoreAbout = () => {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div className={`${button.button} ${button.gray} ${button.widthFitContent}`} 
      onClick={handleClick}>
      <div className={`${text.textBlack} ${text.fontWeight700}`}>Подивитись більше</div>
    </div>
  );
};

export default ButtonMoreAbout;