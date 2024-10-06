import { useState, useEffect } from 'react';
import Button from '../layouts/Button';
import mainStyle from '../../styles/MainStyle.module.css';
import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/apps/AppInfo.module.css';

export default function AppInfo({ app }) {
    const { title = 'Title Not Found', description = 'Description Not Found', 
        avatar = '', trailerUrl = 'https://www.youtube.com/embed/F9tprUGf45k', price = 0, releaseDate, reviews = [], gameId } = app || {};

    const [screenshots, setScreenshots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentMedia, setCurrentMedia] = useState(trailerUrl);

    const parsedReleaseDate = releaseDate ? new Date(releaseDate) : new Date();
    const localizedReleaseDate = parsedReleaseDate.toLocaleDateString();

    useEffect(() => {
        // get screenshots from the API
        const fetchScreenshots = async () => {
            try {
                const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/media/screenshots/recent');
                const data = await response.json();
                setScreenshots(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching screenshots:', error);
                setLoading(false);
            }
        };

        fetchScreenshots();
    }, []);

    const handleMediaClick = (url) => {
        setCurrentMedia(url);
    };

    const scrollLeft = () => {
        document.getElementById('mediaScroll').scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        document.getElementById('mediaScroll').scrollBy({ left: 300, behavior: 'smooth' });
    };

    const handleAddToCart = () => {
        // TODO: Add to cart logic
    };

    const handleAddToWishlist = () => {
        // TODO: Add to wishlist logic
    };

    const handleAddFollow = () => {
        // TODO: Add follow logic
    };

    return (
        <div className={`${styles.game}`}>
            <div className={`${text.textMedium} ${text.fontWeight800}`}>
                {title}
            </div>
            <div className={`${styles.gameInfo}`}>
                <div className={`${styles.media}`}>
                    <div className={`${styles.mediaDisplay}`}
                        style={{ backgroundImage: `url(${currentMedia})` }}>
                        {currentMedia === trailerUrl && (
                            <iframe
                                className={`${styles.video}`}
                                src={trailerUrl}
                                title="Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <div id="mediaScroll" className={`${styles.mediaPanel}`}>
                        <img src={avatar} className={styles.mediaItem} onClick={() => handleMediaClick(trailerUrl)} />
                        {loading ? (
                            <div>Loading screenshots...</div>
                        ) : (
                            screenshots.map((screenshot, idx) => (
                                <img
                                    key={screenshot.id}
                                    src={screenshot.source}
                                    className={styles.mediaItem}
                                    onClick={() => handleMediaClick(screenshot.source)}
                                />
                            ))
                        )}
                    </div>
                    <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                        <button className={styles.scrollButtonLeft} onClick={scrollLeft} />
                        <button className={styles.scrollButtonRight} onClick={scrollRight} />
                    </div>
                </div>
                <div className={`${styles.info}`}>
                    <div className={styles.logo} style={{ backgroundImage: `url(${avatar})` }} />
                    <div className={`${styles.gap20}`}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            {price}₴
                        </div>
                        <div>{description}</div>
                    </div>
                    <div className={`${styles.gap20}`}>
                        <div className={`${positioning.row}`}>
                            <div>ДАТА ВИХОДУ:&nbsp;</div>
                            <div className={`${text.fontWeight700}`}>{localizedReleaseDate}</div>
                        </div>
                        <div className={`${positioning.row}`}>
                            <div>УСІ РЕЦЕНЗІЇ:&nbsp;</div>
                            <div className={`${text.fontWeight700}`}>({reviews.length})</div>
                        </div>
                    </div>
                    <div className={`${styles.gap20}`}>
                        <Button href={'/cart'} onClick={handleAddToCart}>
                            Додати до кошика
                        </Button>
                        <Button style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }} onClick={handleAddToWishlist}>
                            Додати до бажаного
                        </Button>
                        <Button style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }} onClick={handleAddFollow}>
                            Відстежувати
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
