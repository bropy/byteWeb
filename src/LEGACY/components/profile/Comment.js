import text from '../../../styles/Text.module.css';
import positioning from '../../../styles/Positioning.module.css';
import styles from '../../../styles/profile/Comment.module.css';


export default function Comment({comment}) {
    if(!comment || !comment.author || !comment.commentText || !comment.published) return;

    const { author, commentText, published } = comment;

    const formattedDate = new Date(published).toLocaleDateString('uk-UA', {
        day: 'numeric',
        month: 'short',
    });

    const formattedTime = new Date(published).toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className={`${positioning.row} ${styles.comment}`}>
            <div className={`${positioning.column} ${styles.avatar} ${styles.interactive}`}
                onClick={() => window.location.href = `/profile/${author.id}`} />
            <div className={positioning.column}>
                <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                    <div className={`${text.fontWeight700} ${styles.interactive}`}
                        onClick={() => window.location.href = `/profile/${author.id}`}>
                        {author.nickname}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={text.textGray}>
                        {`${formattedDate} о ${formattedTime}`}
                    </div>
                </div>
                <div className={positioning.row}>
                    {commentText}
                </div>
            </div>
        </div>
    );
};