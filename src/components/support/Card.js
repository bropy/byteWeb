import mainStyle from '../../styles/MainStyle.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/support/Card.module.css'


export default function Content ({ title, description, image, href }) {
    return (
        <div className={`${styles.card} ${mainStyle.interactive}`}
            onClick={() => window.location.href = href }>
            <img src={image} alt={title} className={styles.image} />
            <div className={`${text.uppercase} ${text.fontWeight800}`}>
                {title}
            </div>
            <div>
                {description || 'Ось що вам потрібно знати.'}
            </div>
        </div>
    );
}