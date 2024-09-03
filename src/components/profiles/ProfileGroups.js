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

    // MODAL BLOCK
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    const openModal = (title, content) => {
        setModalTitle(title); 
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={`${positioning.column}`}>
            <div className={`
                ${positioning.row} 
                ${positioning.justifyBetween} 
                ${styles.category} 
                ${styles.interactive}`} 
                onClick={() => openModal('Групи',
                    <div className={`${positioning.row} ${positioning.wrap}`}>
                        {groupsElements.map(group => (
                            <div 
                                key={group.id}
                                className={styles.group}
                                style={{
                                    width: '50%',     
                                    minWidth: '280px',  
                                }}> 
                                <Group group={group} />
                            </div>
                        ))}
                    </div>
                )}>
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

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                title={modalTitle} >
                {modalContent}
            </ Modal>
        </div>
    );
};