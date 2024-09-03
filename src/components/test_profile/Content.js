import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfilePageContent.module.css';
import ProfileInfo from "./ProfileInfo";
import ProfileMenu from "./ProfileMenu";
import ProfileActivity from "./ProfileActivity";
import ProfileComments from "./ProfileComments";
import FavoriteGame from "./FavoriteGame";
import ProfileGroups from "./ProfileGroups";


const userMock = {
    id: 1, 
    nickname: 'Nick_Name123', 
    country: 'Україна',
    about: 'Lorem ipsum dolor sit amet consectetur. Eu est penatibus pellentesque ultricies nisl ipsum gravida. Mattis sed at gravida sit ultrices auctor. Id orci fringilla id fames eu. Nulla tristique eu a mauris.',
    state: 'У мережі',
    friends: [
        { id: 1, nickname: 'Friend1', state: 'Востаннє в мережі 5 дн. тому' },
        { id: 2, nickname: 'Friend2', state: 'У мережі' },
        { id: 3, nickname: 'Friend3', state: 'Грає: Resident evil 5' },
        { id: 4, nickname: 'Friend4', state: 'Востаннє в мережі 13 хв. тому' },
        { id: 5, nickname: 'Friend5', state: 'Востаннє в мережі 57 хв. тому' },
        { id: 6, nickname: 'Friend6', state: 'Востаннє в мережі 2 дн. тому' },
        { id: 7, nickname: 'Friend7', state: 'У мережі' },
        { id: 8, nickname: 'Friend8', state: 'У мережі' },
        { id: 9, nickname: 'Friend9', state: 'Востаннє в мережі 36 хв. тому' },
        { id: 10, nickname: 'Friend10', state: 'Грає: Omensight' },
        { id: 11, nickname: 'Friend11', state: 'Грає: Aragami' },
    ],
    groups: [
        { id: 1, name: 'Group1', members: 1 },
        { id: 2, name: 'Group2', members: 2 },
        { id: 3, name: 'Group3', members: 3 },
        { id: 4, name: 'Group4', members: 4 },
        { id: 5, name: 'Group5', members: 5 },
        { id: 6, name: 'Group6', members: 6 },
    ],
    activity : {
        activityTotal: 17,
        lastGames: [
            {
                id: 1,
                title: 'Batman: Arkham Asylum GOTY Edition',
                time: 11.5, 
                lastPlay: '23 лип.',
                achivements: {
                    unlocked: 18,
                    total: 47
                }
            }, 
            {
                id: 2,
                title: 'The Sims™ 4',
                time: 251, 
                lastPlay: '20 лип.',
            }, 
            {
                id: 3,
                title: 'VRChat',
                time: 80, 
                lastPlay: '6 лип.',
            }
        ]
    },
    comments: Array.from({ length: 142 }, (_, i) => ({
        author: {
            id: i, 
            nickname: `Author${i + 1}`,
        },
        commentText: `Comment ${i + 1}. Lorem ipsum dolor sit amet consectetur :)`,
        published: new Date(2024, 6, 16 + (i % 30), 8 + (i % 24), 15 + (i % 60), 0),
    })),
    favoriteGame: {
        id: 4,
        title: 'Red Dead Redemption 2',
        time: 400, 
        lastPlay: '25 лип.',
        achivements: {
            unlocked: 18,
            total: 47
        }
    },
    screenshots: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]
};

 

export default function Content () {

    return (
        <div className={`${positioning.container} ${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap}`}>
                <div className={`${positioning.column} ${styles.column}`}>
                    <div className={styles.marginRight}>
                        <ProfileInfo user={userMock} />
                    </div>
                    <ProfileMenu user={userMock} />
                </div>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileActivity activity={userMock.activity} />
                </div>
            </div>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrapReverse} ${styles.row}`}>
                <div className={`${positioning.column} ${styles.column} ${styles.marginRight}`}>
                    <ProfileComments comments={userMock.comments}/>
                </div>
                <div className={`${positioning.column} ${styles.column}`}>
                    <FavoriteGame game={userMock.favoriteGame} screenshots={userMock.screenshots}/>
                    <br /><br />
                    <ProfileGroups groups={userMock.groups} />
                </div>
            </div>
        </div>
    );
};