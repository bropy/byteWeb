import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfilePageContent.module.css';
import ProfileInfo from "./ProfileInfo";
import ProfileMenu from "./ProfileMenu";
import ProfileActivity from "./ProfileActivity";
import ProfileComments from "./ProfileComments";
import FavoriteGame from "./FavoriteGame";
import ProfileGroups from "./ProfileGroups";

/*
<div className={`${positioning.container} ${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap}`}>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileInfo profile={profile} />
                    <ProfileMenu profile={profile} />
                </div>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileActivity activity={profile.activity} />
                </div>
            </div>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.row}`}>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileComments comments={profile.comments}/>
                </div>
                <div className={`${positioning.column} ${styles.column}`}>
                    <FavoriteGame game={profile.favoriteGame} screenshots={profile.screenshots}/>
                    <br /><br />
                    <ProfileGroups />
                </div>
            </div>
        </div>
*/
export default function Content({ profile }) {
    return (
        <div className={`${positioning.container} ${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap}`}>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileInfo profile={profile} />
                    <ProfileMenu profile={profile} />
                </div>
                <div className={`${positioning.column} ${styles.column}`}>
                    <ProfileActivity activity={profile.activity} />
                </div>
            </div>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.wrap} ${styles.row}`}>

            </div>
        </div>
    );
}