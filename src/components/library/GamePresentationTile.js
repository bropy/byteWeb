import mainStyle from '../../styles/MainStyle.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/library/Content.module.css'


export default function GamePresentationTile ({game}) {
    return(
        <div className={`${mainStyle.interactive}`}
            onClick={() => window.location.href = game.url}>
            <div className={styles.gameImage}
                style={{backgroundImage: `url(${game.image})`}}/>
            <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.truncate}`}>
                {game.title}
            </div>
        </div>
    );
}