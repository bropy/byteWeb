import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/library/Content.module.css'


export default function GamePresentationList ({game}) {
    return(
        <div className={`${mainStyle.interactive} ${positioning.row}`}
            onClick={() => window.location.href = `/apps/${game.id}`}>
            <div className={`${positioning.marginRight20} ${styles.gameImage} ${styles.gameImageTable}`}
                style={{backgroundImage: `url(${game.image})`}}/>
            <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.truncate}`}>
                {game.title}
            </div>
        </div>
    );
}