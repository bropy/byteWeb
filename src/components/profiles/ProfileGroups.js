import React, { useState, useEffect } from 'react';
import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileGroups.module.css';


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
                    6
                </div>
            </div>
            <div>
                ToDo: Groups Presentation
            </div>
        </div>
    );
};