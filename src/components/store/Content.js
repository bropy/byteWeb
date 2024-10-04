import { useState, useEffect } from 'react';
import Recommended from './Recommended';

import mainStyle from '../../styles/MainStyle.module.css';
import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import search from '../../styles/layouts/Search.module.css';
import styles from '../../styles/store/Content.module.css';

export default function Content() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Fetch games from the backend
        const fetchGames = async () => {
            try {
                const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/games');
                const data = await response.json();
                console.log('Fetched games:', data);  // Log the entire response
                if (data && data.content) {
                    setGames(data.content.slice(0, 9));  // Take the first 9 games
                } else {
                    console.error('No content found in the response');
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className={`${positioning.container}`}>
            <div className={`${positioning.row} ${positioning.justifyEnd} ${text.fontWeight700}`}>
                <form className={search.form}>
                    <button type='submit'>
                        <div className={search.searchIcon} />
                    </button>
                    <input type='text' id='support_input' name='support_input' 
                        placeholder='Пошук' className={search.input} />
                </form>
            </div>
            <div className={`${positioning.row} ${styles.marginTop}`}>
                <Recommended games={games} /> 
            </div>
            <div className={`${positioning.row} ${styles.marginTop}`}>
                New               
            </div>
            <div className={`${positioning.row} ${styles.marginTop}`}>
                Categories              
            </div>
        </div>
    );
}
