import React, { useState, useEffect } from 'react';
import styles from '../../styles/community/Posts.module.css';

export default function Posts() {
    const [screenshots, setScreenshots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScreenshots = async () => {
            try {
                const response = await fetch('https://byteserver-b28593dfb543.herokuapp.com/media/screenshots/recent');
                if (!response.ok) {
                    throw new Error('Failed to fetch screenshots');
                }
                const data = await response.json();
                setScreenshots(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchScreenshots();
    }, []);

    const handleLike = async (id) => {
        try {
            const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/media/screenshots/${id}/like`, {
                method: 'PATCH', // Changed from POST to PATCH
            });
            if (!response.ok) throw new Error('Failed to like screenshot');

            const updatedScreenshot = await response.json();
            setScreenshots((prevScreenshots) =>
                prevScreenshots.map((screenshot) =>
                    screenshot.id === id ? updatedScreenshot : screenshot
                )
            );
        } catch (err) {
            console.error(err);
        }
    };
    const handleAward = async (id) => {
        try {
            const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/media/screenshots/${id}/award`, {
                method: 'PATCH', // Changed from POST to PATCH
            });
            if (!response.ok) throw new Error('Failed to award screenshot');

            const updatedScreenshot = await response.json();
            setScreenshots((prevScreenshots) =>
                prevScreenshots.map((screenshot) =>
                    screenshot.id === id ? updatedScreenshot : screenshot
                )
            );
        } catch (err) {
            console.error(err);
        }
    };
    const handleDislike = async (id) => {
        try {
            const response = await fetch(` https://byteserver-b28593dfb543.herokuapp.com/media/screenshots/${id}/dislike`, {
                method: 'PATCH',
            });
            if (!response.ok) throw new Error('Failed to dislike screenshot');

            const updatedScreenshot = await response.json();
            setScreenshots((prevScreenshots) =>
                prevScreenshots.map((screenshot) =>
                    screenshot.id === id ? updatedScreenshot : screenshot
                )
            );
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.postsContainer}>
            {screenshots.length === 0 ? (
                <div>No screenshots found.</div>
            ) : (
                screenshots.map((screenshot) => (
                    <div key={screenshot.id} className={styles.post}>
                        <img src={screenshot.source} alt={screenshot.name} className={styles.screenshotImage} />
                        <div className={styles.screenshotInfo}>
                            <h3 className={styles.screenshotTitle}>{screenshot.name}</h3>
                            <p>{screenshot.description}</p>
                            <div className={styles.actions}>
                                <button
                                    onClick={() => handleLike(screenshot.id)}
                                    className={styles.likeButton}
                                >
                                    Лайків: {screenshot.likes}
                                </button>
                                <button
                                    onClick={() => handleDislike(screenshot.id)}
                                    className={styles.dislikeButton}
                                >
                                     Дизлайків: {screenshot.dislikes}
                                </button>
                                <button
                                    onClick={() => handleLike(screenshot.id)}
                                    className={styles.award}
                                >
                                     Відзначити нагородою: {screenshot.award}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
