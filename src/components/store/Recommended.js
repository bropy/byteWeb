import { useState, useMemo, useEffect } from 'react';

import Button from '../layouts/Button'

import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/store/Recommended.module.css'


export default function Recommended () {
    const games = [
        { id: 1, name: 'ELDEN RING', price: '1 799₴', description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.', releaseDate: '25 лют. 2022' },
        { id: 2, name: 'HORIZON FORBIDDEN WEST', price: '1 999₴', description: 'Join Aloy as she braves the Forbidden West, a dangerous frontier filled with mysterious new machines and cultures.', releaseDate: '18 лют. 2022' },
        { id: 3, name: 'GOD OF WAR RAGNAROK', price: '2 399₴', description: 'Follow Kratos and Atreus on a perilous journey as they face the end of days in Norse mythology.', releaseDate: '9 листопада 2022' },
        { id: 4, name: 'FINAL FANTASY XVI', price: '2 499₴', description: 'Embark on an epic adventure in a world divided by power and ambition, where summons take on new forms.', releaseDate: '22 червня 2023' },
        { id: 5, name: 'ZELDA: BREATH OF THE WILD 2', price: '2 599₴', description: 'Return to Hyrule in this long-awaited sequel, featuring new mechanics and expansive open-world exploration.', releaseDate: '12 травня 2023' },
        { id: 6, name: 'SPIDERMAN 2', price: '1 999₴', description: 'Swing through the streets of New York City as both Peter Parker and Miles Morales in this exciting sequel.', releaseDate: '20 жовтня 2023' },
        { id: 7, name: 'STARFIELD', price: '2 799₴', description: 'Join the space exploration in Bethesda’s highly anticipated RPG set in the vastness of space.', releaseDate: '6 вересня 2023' },
        { id: 8, name: 'ASSASSIN’S CREED MIRAGE', price: '1 499₴', description: 'Experience the rich history and stunning visuals of the Middle East in this new Assassin’s Creed entry.', releaseDate: '5 жовтня 2023' },
        { id: 9, name: 'OVERWATCH 2', price: '0₴', description: 'Team up with friends in this multiplayer shooter, featuring new heroes and maps.', releaseDate: '4 жовтня 2022' },
    ];
    

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = games.length;

    const currentGame = games[currentPage-1];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
        }, 10000); 

        return () => clearInterval(interval);
    }, [totalPages]);

    return (
        <div class={styles.container} >
            <div class={`${styles.recommended} ${text.textMedium} ${text.fontWeight800} ${text.uppercase}`}>
                ВІДІБРАНЕ І РЕКОМЕНДАЦІЇ
            </div>
            <div className={styles.gameInfoContainer}>
                <div className={`${text.textMediumSmall} ${text.fontWeight800}`}>
                    {currentGame.name}
                </div>
                <div className={`${text.textMedium} ${text.fontWeight200}`}>
                    {currentGame.price}
                </div>
                <div>{currentGame.description}</div>
                <div className={positioning.row}>
                    <div>ДАТА ВИХОДУ:&nbsp;</div>
                    <div className={text.fontWeight700}>{currentGame.releaseDate}</div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button href={'/'}>Додати до бажаного</Button>
                <Button href={'/'} style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}>
                    Відстежувати
                </Button>
                <Button href={'/'} style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}>
                    Ігнорувати
                </Button>
            </div>
            <div className={styles.gameImage}
                style={{backgroundImage: `url(${game.image})`}} />
            <div className={`${styles.pagination} ${positioning.row} ${positioning.justifyCenter}`}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.activePageButton : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}