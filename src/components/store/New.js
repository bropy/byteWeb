import { useEffect, useState } from 'react';

import mainStyle from '../../styles/MainStyle.module.css'
import styles from '../../styles/store/New.module.css'; // Ensure you have this CSS module for styling


export default function New() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        const fetchLatestGames = async () => {
            try {
                const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/games');
                const data = await response.json();
                console.log('Fetched latest games:', JSON.stringify(data, null, 2));
                if (data && data.content) {
                    const games = data.content.slice(0, 8); // Take the first 4 latest games
                    setLatestGames(games);
                    console.log('Latest games set:', games);
                } else {
                    console.error('No content found in the response');
                }
            } catch (error) {
                console.error('Error fetching latest games:', error);
            }
        };

        fetchLatestGames();
    }, []);

    return (
        <div className={styles.latestGamesContainer}>
            <h1 className={styles.gameTitle}>Останні ігри</h1>
            <div className={styles.gamesList}>
                {latestGames.map(game => (
                    <div key={game.id} className={`${styles.gameCard}`}>
                        <img src={game.avatar} alt={game.title} 
                            className={`${styles.gameImage} ${mainStyle.interactive}`} 
                            onClick={() => {window.location.href=`/apps/${game.id}`}}/>
                        <div className={styles.gameDetails}>
                            <div className={`${styles.gameTitle} ${mainStyle.interactive}`}
                                onClick={() => {window.location.href=`/apps/${game.id}`}}>
                                {game.title}
                            </div>
                            <p className={styles.gamePrice}>
                                {game.price === 0 ? 'Вільний доступ' : `${game.price}₴`}
                            </p>
                            {game.discount && (
                                <span className={styles.gameDiscount}>-{game.discount}%</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
