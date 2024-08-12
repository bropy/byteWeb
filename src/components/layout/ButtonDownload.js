import button from '../../styles/Button.module.css';
import text from '../../styles/Text.module.css';
import { useLanguage } from '../../contexts/LanguageContext';


const ButtonDownload = () => {
  const handleClick = () => {
    window.location.href = '/download';
  };
  const { translations } = useLanguage();


  return (
    <div className={`${button.button} ${button.black} ${button.widthFitContent}`} 
      onClick={handleClick}>
      <div className={button.downloadIcon} />
      <div className={`${text.textWhite} ${text.fontWeight700}`}>{translations.download || 'Завантажити'}</div>
    </div>
  );
};

export default ButtonDownload;