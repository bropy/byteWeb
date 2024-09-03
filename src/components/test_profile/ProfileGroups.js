import React, { useState, useEffect } from 'react';

import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileGroups.module.css';

import Group from './Group';
import Modal from './Modal';


export default function ProfileGroups({groups}) {
    // GROUPS BLOCK
    const [groupsElements, setGroupsElements] = useState([]);
    const [loadIndex, setLoadIndex] = useState(0);

    const loadMoreGroups = () => {
        if (groups == null) return;
        const newGroups = groups.slice(loadIndex, loadIndex + 4);
        setLoadIndex(loadIndex + newGroups.length);
        setGroupsElements(prevGroups => [...prevGroups, ...newGroups]);
    };

    useEffect(() => {
        loadMoreGroups();
    }, []);

    return (
        <div className={`${positioning.column}`}>
            <div className={`
                ${positioning.row} 
                ${positioning.justifyBetween} 
                ${styles.category} 
                ${styles.interactive}`} 
                onClick={() => window.location.href = '/profile/groups'}>
                <div>
                    Групи
                </div>
                <div className={text.fontWeight800}>
                    {groups != null ? groups.length : 0}
                </div>
            </div>
            <div className={styles.groups}>
                {groupsElements.map(group => (
                    <div 
                        key={group.id}
                        className={styles.group}> 
                        <Group group={group} />
                    </div>

                ))}  
            </div>
            <br />
                {loadIndex < groups?.length && (
                    <div className={`
                        ${text.fontWeight800} 
                        ${text.uppercase} 
                        ${text.alignCenter} 
                        ${styles.interactive}`}
                        onClick={loadMoreGroups}>
                        Завантажити більше...
                    </div>
                )}
        </div>
    );
};