import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/Group.module.css';


export default function Group({group}) {
    if (!group) return null; 

    const { id, name = '', members = 0 } = group;

    const handleGroupClick = () => {
        window.location.href = `/group/${id}`;
    };

    return (
        <div 
            className={styles.interactive}
            onClick={handleGroupClick}>
            <div className={`${positioning.row}`}>
                <div className={`${styles.avatar}`} />         
                <div className={`${positioning.column} ${text.textSmall} ${text.fontWeight800}`}>
                    <div className={`${text.fontWeight800}`}>
                        {name}
                    </div>
                    <div className={`${text.fontWeight600}`}>
                        {`Учасників: ${members}`}
                    </div>
                </div>
            </div>
        </div>
    );
};