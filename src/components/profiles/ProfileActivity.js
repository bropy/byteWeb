import React from 'react';
import { format, subWeeks, isAfter } from 'date-fns';
import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileActivity.module.css';
import GameInfo from './GameInfo';

export default function ProfileActivity({ activity }) {
    const twoWeeksAgo = subWeeks(new Date(), 2);

    // Filter and sort the games
    const recentGames = activity
        .filter(game => isAfter(new Date(game.lastPlayed), twoWeeksAgo)) // Filter games played in the last 2 weeks
        .sort((a, b) => b.playtimeHours - a.playtimeHours); // Sort by playtime in descending order

    // Calculate total playtime for the last 2 weeks
    const totalPlaytime = recentGames.reduce((sum, game) => sum + game.playtimeHours, 0);

    return (
        <div>
            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter} ${styles.title}`}>
                <div className={`${text.upperCase} ${text.textMedium} ${text.fontWeight800}`}>
                    Остання активність
                </div>
                <div>
                    {`${totalPlaytime.toFixed(1)} год. останні 2 тижні`} 
                </div>
            </div>
            <div className={styles.games}>
                {recentGames.length > 0 ? (
                    recentGames.map((game) => (
                        <div key={game.gameId}>
                            <GameInfo game={game} />
                            <div className={styles.line} />
                        </div>
                    ))
                ) : (
                    <div>
                        <br />
                        <div className={text.textCenter}>Немає нещодавно зіграних ігор</div>
                        <br />
                    </div>
                )}
            </div>

            <br />
            <div className={`${positioning.row}`}>
                <div>
                    Переглянути
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWeight700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Нещодавно зіграні
                </div>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWeight700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Бажане
                </div>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <div className={`${text.fontWeight700} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                    Рецензії
                </div>
            </div>
        </div>
    );
}
