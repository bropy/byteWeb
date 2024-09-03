import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/User.module.css';


export default function User({user, style}) {
    if (!user) return;

    return (
        <div 
            className={`${styles.userElement} ${positioning.row} ${styles.interactive}`}
            style={style}
            onClick={() => window.location.href = `/profiles/${user.id}`}>
            <img 
                src={friend.avatar} 
                alt={friend.nickname} 
                className={styles.userAvatar}
            />
            <div className={positioning.column}>
                <div>
                    {user.nickname}
                </div>
                <div className={text.textSmallest}>
                    {user.state}
                </div>
            </div>
        </div>
    );
};