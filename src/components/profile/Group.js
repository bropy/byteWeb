import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/Group.module.css';


export default function Group({group}) {
    return (
        <div key={group.id} 
        className={styles.interactive}
        onClick={() => window.location.href = `/group/${group.id}`}>
            <div className={`${positioning.row}`}>
                <div className={`${styles.avatar}`} />         
                <div className={`${positioning.column} ${text.textSmall} ${text.fontWeight800}`}>
                    <div className={`${text.fontWeight800}`}>
                        {group.name}
                    </div>
                    <div className={`${text.fontWeight600}`}>
                        {`Учасників: ${group.members}`}
                    </div>
                </div>
            </div>
        </div>
    );
};