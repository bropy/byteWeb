import { useEffect, useState } from 'react';

import Button from '../layouts/Button';
import mainStyle from '../../styles/MainStyle.module.css';
import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/store/Recommended.module.css';

export default function Recommended({ games }) {
    useEffect(() => {
        console.log('Received games:', games);
    }, [games]);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = games.length;
    const currentGame = games[currentPage - 1]; // Get the current game based on the current page

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
        <div className={styles.container}>
            <div className={`${styles.recommended} ${text.textMedium} ${text.fontWeight800} ${text.uppercase}`}>
                ВІДІБРАНЕ І РЕКОМЕНДАЦІЇ
            </div>
            <div className={styles.gameInfoContainer}>
                {currentGame ? ( // Check if currentGame is defined
                    <>
                        <div
                            className={`${mainStyle.interactive} ${text.textMediumSmall} ${text.fontWeight800}`}
                            onClick={() => window.location.href = `/apps/${currentGame.id}`}>
                            {currentGame.title}
                        </div>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            {currentGame.price === 0 ? (
                                <p>Вільний доступ</p>
                            ) : (
                                <p>{currentGame.price}₴</p>
                            )}
                        </div>
                        <div>{currentGame.description}</div>
                        <div className={positioning.row}>
                            <div>ДАТА ВИХОДУ:&nbsp;</div>
                            <div className={text.fontWeight700}>
                                {new Date(currentGame.releaseDate).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading game information...</p> // Fallback loading message
                )}
            </div>
            <div className={styles.buttons}>
                <Button>Додати до бажаного</Button>
                <Button style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}>
                    Відстежувати
                </Button>
                <Button style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}>
                    Ігнорувати
                </Button>
            </div>
            {currentGame && ( // Only render the game image if currentGame is defined
                <div
                    className={`${styles.gameImage} ${mainStyle.interactive}`}
                    style={{
                        backgroundImage: `url(${currentGame.avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        imageRendering: 'auto',
                    }}
                    onClick={() => window.location.href = `/apps/${currentGame.id}`}
                />
            )}

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
