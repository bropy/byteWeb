import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfilePageContent.module.css';
import ProfileInfo from "./ProfileInfo";
import ProfileMenu from "./ProfileMenu";
import ProfileActivity from "./ProfileActivity";


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
    }
};

export default function Content () {

    return (
        <div className={`${positioning.container} ${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileInfo user={userMock} />
                    <ProfileMenu user={userMock} />
                </div>
                <ProfileActivity activity={userMock.activity} />
            </div>
            <div className={`${positioning.row} ${styles.row}`}>
                LOWER ROW
            </div>
        </div>
    );
};