import React, { useState, useEffect } from 'react';
import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileMenu.module.css';

export default function ProfileMenu({ profile }) {
    const [friendsElements, setFriendsElements] = useState([]);
    const [loadIndex, setLoadIndex] = useState(0);

    const { friendsProfiles = [], games = [] } = profile || {};

    const loadMoreFriends = () => {
        const newFriends = friendsProfiles.slice(loadIndex, loadIndex + 4);
        setLoadIndex(loadIndex + newFriends.length);
        setFriendsElements(prevFriends => [...prevFriends, ...newFriends]);
    };

    useEffect(() => {
        if (friendsProfiles.length > 0) {
            loadMoreFriends(); 
        }
    }, [friendsProfiles]);

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween}`}>
            <div className={`${positioning.column} ${styles.column} ${styles.upperLine}`}>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/games'}>
                    <div>Ігри</div>
                    <div className={text.fontWeight800}>{games.length}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/screenshots'}>
                    <div>Знімки екрана</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.screenshotCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/works'}>
                    <div>Творчі роботи</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.creativeWorkCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/videos'}>
                    <div>Відео</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.videoCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/guides'}>
                    <div>Посібники</div>
                    <div className={text.fontWeight800}>{profile.mediaCounter.guideCount}</div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/reviews'}>
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
                    onClick={() => window.location.href = '/profile/friends'}>
                    <div>Друзі</div>
                    <div className={text.fontWeight800}>{friendsProfiles.length}</div>
                </div>
                <div className={styles.friends}>
                    {friendsElements.map(friend => (
                        <div key={friend.id} 
                            className={`${styles.friendElement} ${positioning.row} ${styles.interactive}`}
                            onClick={() => window.location.href = `/profiles/${friend.id}`}>
                            <img 
                                src={friend.avatar} 
                                alt={friend.nickname} 
                                className={styles.friendAvatar}
                            />
                            <div className={positioning.column}>
                                <div>{friend.nickname}</div>
                                <div className={text.textSmallest}>{friend.status}</div>
                            </div>
                        </div>
                    ))}
                    <br />
                    {loadIndex < friendsProfiles.length && (
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
        </div>
    );
}
