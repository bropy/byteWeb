import { useState } from 'react';

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/library/Content.module.css'


export default function CollapsibleFilter ({ title, items, handleFilterChange, itemsFilter, setItemsFilter }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div>
            <div className={`${mainStyle.interactive} ${positioning.row} ${positioning.justifyBetween} 
                ${positioning.alignCenter} ${styles.filterHeader}`} onClick={toggleCollapse}>
                <div className={`${positioning.marginVertical20} ${text.uppercase} ${text.fontWeight800}`}>
                    {title}
                </div>
                <div>
                    {isCollapsed ? '▼' : '▲'}
                </div>
            </div>
            {!isCollapsed && (
                <div>
                    {items.map(item => (
                        <label key={item}>
                            <input type="checkbox" value={item} checked={itemsFilter.includes(item)}
                                onChange={() => setItemsFilter(prev => handleFilterChange(prev, item))} />
                            <span className={styles.checkmark} />
                            <div style={{ marginTop: `4px` }}>
                                {item}
                            </div>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};