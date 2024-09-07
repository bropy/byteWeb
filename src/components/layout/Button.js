import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import button from '../../styles/Button.module.css';


export default function Button ({ href, children }) {
  const handleClick = () => {
    window.location.href = {href};
  };

  return (
    <div className={`${button.button}`} 
          onClick={handleClick}>
          <div className={`${text.textSmall} ${text.fontWeight700} ${text.noWrap}`}>
            {children}
          </div>
    </div>
  );
};