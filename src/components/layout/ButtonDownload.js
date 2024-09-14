import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import button from '../../styles/Button.module.css';

import Button from './Button';

import { useLanguage } from '../../contexts/LanguageContext';


export default function ButtonDownload ({ style }) {
  const { translations } = useLanguage();

  return (
    <Button href={'/download'} style={style}>
      <div className={positioning.row}>
        <div className={button.downloadIcon} />
        <div>{translations.download || 'Завантажити'}</div>
      </div>
    </Button>
  );
};