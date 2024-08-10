import React, { useState, useEffect } from 'react';
import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileMenu.module.css';


export default function ProfileMenu({user}) {
    const [friendsElements, setFriendsElements] = useState([]);
    const [loadIndex, setLoadIndex] = useState(0);

    const { friends = [] } = user || {};

    const loadMoreFriends = () => {
        if (friends == null) return;
        const newFriends = friends.slice(loadIndex, loadIndex + 4);
        setLoadIndex(loadIndex + newFriends.length);
        setFriendsElements(prevFriends => [...prevFriends, ...newFriends]);
    };

    useEffect(() => {
        loadMoreFriends();
    }, []);

    return (
        <div className={`${positioning.row} ${positioning.justifyBetween} `}>
            <div className={`${positioning.column} ${styles.column} ${styles.upperLine}`}>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/games'}>
                    <div>
                        Ігри
                    </div>
                    <div className={text.fontWeight800}>
                        16
                    </div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/screenshots'}>
                    <div>
                        Знімки екрана 
                    </div>
                    <div className={text.fontWeight800}>
                        89
                    </div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/works'}>
                    <div>
                        Творчі роботи
                    </div>
                    <div className={text.fontWeight800}>
                        45
                    </div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/videos'}>
                    <div>
                        Відео
                    </div>
                    <div className={text.fontWeight800}>
                        34
                    </div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/guides'}>
                    <div>
                        Посібники
                    </div>
                    <div className={text.fontWeight800}>
                        2
                    </div>
                </div>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/reviews'}>
                    <div>
                        Рецензії
                    </div>
                    <div className={text.fontWeight800}>
                        6
                    </div>
                </div>
            </div>
            <div className={`${positioning.column} ${styles.column} ${styles.upperLine}`}>
                <div className={`
                    ${positioning.row} 
                    ${positioning.justifyBetween} 
                    ${styles.category} 
                    ${styles.interactive}`} 
                    onClick={() => window.location.href = '/profile/friends'}>
                    <div>
                        Друзі
                    </div>
                    <div className={text.fontWeight800}>
                        {friends != null ? friends.length : 0}
                    </div>
                </div>
                <div className={styles.friends}>
                    {friendsElements.map(friend => (
                        <div key={friend.id} 
                            className={`${styles.friendElement} ${positioning.row} ${styles.interactive}`}
                            onClick={() => window.location.href = `/profile/${friend.id}`}>
                            <div className={styles.friendAvatar}/>
                            <div className={positioning.column}>
                                <div>
                                    {friend.nickname}
                                </div>
                                <div className={text.textSmallest}>
                                    {friend.state}
                                </div>
                            </div>
                        </div>
                    ))}
                    <br />
                    {loadIndex < friends?.length && (
                        <div className={`
                            ${text.fontWeight800} 
                            ${text.textUppercase} 
                            ${text.textAlignCenter} 
                            ${styles.interactive}`}
                            onClick={loadMoreFriends}>
                            Завантажити більше...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};