import ButtonDowload from '../layout/ButtonDownload';

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css';


export default function DownloadNow ({ isDesktop }) {
  return (
    <div className={`${positioning.container} ${positioning.column} ${positioning.alignCenter}`}>
        <div className={`${positioning.marginBottom20} ${text.textMedium} ${text.fontWeight800}`}>
            ДОСИТЬ ГОРТАТИ. ЧАС ЗАВАНТАЖУВАТИ.
        </div>
        <ButtonDowload />
        <div className={`${mainStyle.interactive} ${positioning.marginTop20} ${text.textWhite} ${text.textSmall} 
            ${text.fontWeight600} ${text.underline}`}
            onClick={() => window.location.href = '/download'}>
            Перейти на веб-версію додатку
        </div>
    </div>
  );
};