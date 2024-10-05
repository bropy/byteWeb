import React, { useState, useEffect } from 'react';

import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileMenu.module.css';

import User from './User';
import Modal from './Modal';


export default function ProfileMenu({ profile }) {
    // FRIENDS BLOCK
    const { friends = [] } = User || {};

    const [friendsElements, setFriendsElements] = useState([]);
    const [loadIndex, setLoadIndex] = useState(0);

    const loadMoreFriends = () => {
        if (friendsProfiles == null) return;
        const newFriends = friendsProfiles.slice(loadIndex, loadIndex + 4);
        setLoadIndex(loadIndex + newFriends.length);
        setFriendsElements(prevFriends => [...prevFriends, ...newFriends]);
    };

    useEffect(() => {
        if (profile.friendsProfiles.length > 0) {
            loadMoreFriends(); 
        }
    }, [profile.friendsProfiles]);

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
        <div className={`${positioning.row} ${positioning.wrap}`}>
            <div className={`${positioning.column} ${styles.column} ${styles.upperLine}`}>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/library'}>
                    <div>Ігри</div>
                    <div className={text.fontWeight800}>10</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/community'}>
                    <div>Знімки екрана</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.screenshotCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/community'}>
                    <div>Творчі роботи</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.creativeWorkCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/community'}>
                    <div>Відео</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.videoCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/community'}>
                    <div>Посібники</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.guideCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/community'}>
                    <div>Рецензії</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.reviewCount}</div>
                </div>
            </div>
            <div className={`${positioning.column} ${styles.column} ${styles.upperLine}`}>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => openModal('Друзі',
                        <div className={`${positioning.row} ${positioning.wrap}`}>
                            {friendsProfiles.map(friend => (
                                <User 
                                    key={friend.id} 
                                    user={friend}
                                    style={{
                                        width: '50%',     
                                        minWidth: '280px',  
                                    }}
                                />
                            ))}
                        </div>
                    )}>
                    <div>Друзі</div>
                    <div className={text.fontWeight800}>{profile.friendsProfiles.length}</div>
                </div>
                <div className={styles.friends}>
                    {friendsElements.map(friend => (
                        <User key={friend.id} user={friend}/>
                    ))}
                    <br />
                    {loadIndex < profile.friendsProfiles.length && (
                        <div className={`
                            ${text.fontWeight800} 
                            ${text.uppercase} 
                            ${text.alignCenter} 
                            ${styles.interactive}`}
                            onClick={loadMoreFriends}>
                            Завантажити більше...
                        </div>
                    )}
                </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                title={modalTitle} >
                {modalContent}
            </ Modal>
        </div>
    );
}
