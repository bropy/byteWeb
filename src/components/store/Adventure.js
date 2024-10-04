import { useEffect, useState } from 'react';
import styles from '../../styles/store/New.module.css'; // Ensure you have this CSS module for styling

export default function Adventure() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        const fetchLatestGames = async () => {
            try {
                const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/games');
                const data = await response.json();
                console.log('Fetched latest games:', JSON.stringify(data, null, 2));

                if (data && data.content) {
                    const adventureGames = data.content.filter(game => game.genre === 'Adventure');
                    const games = adventureGames.slice(0, 8); 
                    setLatestGames(games);
                    console.log('Latest adventure games set:', games);
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
            <h1 className={styles.gameTitle}>Ігри в категорії "Пригоди"</h1>
            <div className={styles.gamesList}>
                {latestGames.map(game => (
                    <div key={game.id} className={styles.gameCard}>
                        <img src={game.avatar} alt={game.title} className={styles.gameImage} />
                        <div className={styles.gameDetails}>
                        <div
                            className={`${styles.gameTitle}`}
                            onClick={() => window.location.href = `/apps/${game.id}`}>
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
