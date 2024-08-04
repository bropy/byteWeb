import styles from '../../styles/ProfilePageContent.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'

const friendsMock = [
    { id: 1, nickname: 'Friend1', state: 'Востаннє в мережі 5 дн. тому' },
    { id: 2, nickname: 'Friend2', state: 'У мережі' },
    { id: 3, nickname: 'Friend3', state: 'Грає: Resident evil 5' },
    { id: 4, nickname: 'Friend4', state: 'Востаннє в мережі 13 хв. тому' },
    { id: 5, nickname: 'Friend5', state: 'Востаннє в мережі 57 хв. тому' },
];

const friendsElements = [];

const LoadMoreFriends = () => {
    for (let i = 0; i < friendsMock.length && i < 4; i++) {
        friendsElements.push(
          friendsMock[i]
        );
    }
}

const ClearFriends = () => {
    for (let i = 0; i < friendsElements.length; i++) {
        friendsElements.pop();
    }
}

const Content = () => {
    ClearFriends();
    LoadMoreFriends();
    
    return (
        <div className={`${positioning.container} ${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={positioning.row}>
                <div className={`${positioning.column} ${styles.columnLeft}`}>
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
                            11
                        </div>
                    </div>
                    
                    <div className={styles.friends}>
                        {friendsElements.map(friend => (
                            <div key={friend.id} className={`${styles.friendElement} ${positioning.row}`}>
                                <div className={styles.avatar}/>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;