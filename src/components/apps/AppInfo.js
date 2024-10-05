import { useState, useMemo } from 'react'

import Button from '../layouts/Button'

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/apps/AppInfo.module.css'


export default function AppInfo ({app}) {
    const { title = 'Title Not Found', description = 'Descriptiom Not Found', 
        logo = '', trailerUrl = 'https://www.youtube.com/embed/F9tprUGf45k', screenshots = [
            'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/8885140/pexels-photo-8885140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/15763947/pexels-photo-15763947/free-photo-of-game-boy-pocket-console.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'], 
        price = 0, relaseDate = new Date().toLocaleDateString(), reviews = [],  } = app || {};

    const [currentMedia, setCurrentMedia] = useState(trailerUrl);

    const handleMediaClick = (url) => {
        setCurrentMedia(url);
    };

    const scrollLeft = () => {
        document.getElementById('mediaScroll').scrollBy({left: -300, behavior: 'smooth'});
    };

    const scrollRight = () => {
        document.getElementById('mediaScroll').scrollBy({left: 300, behavior: 'smooth'});
    };

    const handleAddToCart = () => {
        // TODO
    }

    const handleAddToWishlist = () => {
        // TODO
    }

    const handleAddFollow = () => {
        // TODO
    }

    return (
        <div className={`${styles.game}`}>
            <div className={`${text.textMedium} ${text.fontWeight800}`}>
                {title}
            </div>
            <div className={`${styles.gameInfo}`}>
                <div className={`${styles.media}`}>
                    <div className={`${styles.mediaDisplay}`}
                        style={{backgroundImage: `url(${currentMedia})`}}>
                        {currentMedia == trailerUrl &&<iframe className={`${styles.video}`}
                        src={trailerUrl} 
                        title="Trailer" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    </div>
                    <div id="mediaScroll" className={`${styles.mediaPanel}`}>
                        <img src={app.avatar} className={styles.mediaItem} 
                            onClick={() => handleMediaClick(trailerUrl)} />
                        {screenshots.map((screenshot, idx) => (
                            <img 
                                key={idx} 
                                src={screenshot} 
                                className={styles.mediaItem}
                                onClick={() => handleMediaClick(screenshot)} 
                            />
                        ))}
                    </div>
                    <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                        <button className={styles.scrollButtonLeft} 
                            onClick={scrollLeft} />
                        <button className={styles.scrollButtonRight} 
                            onClick={scrollRight} />
                    </div>
                </div>
                <div className={`${styles.info}`}>
                    <div className={styles.logo}
                        style={{backgroundImage: `url(${app.avatar})`}}/>
                    <div className={`${styles.gap20}`}>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            {price}₴
                        </div>
                        <div className={``}>
                            {description}
                        </div>
                    </div>
                    <div className={`${styles.gap20}`}>
                        <div className={`${positioning.row}`}>
                            <div>
                                ДАТА ВИХОДУ:&nbsp;
                            </div>
                            <div className={`${text.fontWeight700}`}>
                                {relaseDate}
                            </div>
                        </div>
                        <div className={`${positioning.row}`}>
                            <div>
                                УСІ РЕЦЕНЗІЇ:&nbsp;
                            </div>
                            <div className={`${text.fontWeight700}`}>
                                ({reviews.length})
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.gap20}`}>
                        <Button href={'/cart'}
                            onClick={handleAddToCart}>
                            Додати до кошика
                        </Button>
                        <Button style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}
                            onClick={handleAddToWishlist}>
                            Додати до бажаного
                        </Button>
                        <Button style={{ backgroundColor: `#252525`, border: `2px solid white`, color: `white` }}
                            onClick={handleAddFollow}>
                            Відстежувати
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}