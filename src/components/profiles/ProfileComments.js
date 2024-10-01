import React, { useState, useEffect, useCallback } from 'react';

import Comment from './Comment';

import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileComments.module.css';
import commentStyles from '../../styles/profile/Comment.module.css';


export default function ProfileComments({ profileId }) {
    const [commentList, setCommentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;
    const [newCommentText, setNewCommentText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchComments = useCallback(async () => {
        if (!profileId) return;
        
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/profiles/${profileId}/comments`);
            if (response.ok) {
                const data = await response.json();
                setCommentList(data);
            } else {
                throw new Error('Failed to fetch comments');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [profileId]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (newCommentText.trim() === '') return;

        try {
            const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/profiles/${profileId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newCommentText }),
            });

            if (response.ok) {
                const newComment = await response.json();
                setCommentList([...commentList, newComment]);
                setNewCommentText('');
                setCurrentPage(Math.ceil((commentList.length + 1) / commentsPerPage));
            } else {
                throw new Error('Failed to post comment');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const totalPages = Math.ceil(commentList.length / commentsPerPage);
    const currentComments = commentList.slice(
        (currentPage - 1) * commentsPerPage,
        currentPage * commentsPerPage
    );

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPagination = () => {
        const pages = [];
        pages.push(
            <button
                key="prev"
                className={`${styles.button} ${styles.interactive}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
        );

        pages.push(
            <button
                key={1}
                className={`${styles.button} ${currentPage === 1 ? styles.active : styles.interactive}`}
                onClick={() => handlePageClick(1)}
            >
                1
            </button>
        );

        if (currentPage > 4) {
            pages.push(<span key="dots1">...</span>);
        }

        for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
            pages.push(
                <button
                    key={i}
                    className={`${styles.button} ${currentPage === i ? styles.active : styles.interactive}`}
                    onClick={() => handlePageClick(i)}>
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages - 3) {
            pages.push(<span key="dots2">...</span>);
        }

        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    className={`${styles.button} ${currentPage === totalPages ? styles.active : styles.interactive}`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        pages.push(
            <button
                key="next"
                className={`${styles.button} ${styles.interactive}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        );

        return pages;
    };

    return (
        <div>
            <div className={`${positioning.row} ${text.upperCase} ${text.textMedium} ${text.fontWeight800} ${styles.title}`}>
                Коментарі
            </div>
            <div className={`${positioning.row} ${commentStyles.comment} ${positioning.alignCenter}`}>
                <div className={commentStyles.avatar} />
                <form className={styles.form} onSubmit={handleAddComment}>
                    <input
                        type='text'
                        id='comment_input'
                        name='comment_input'
                        placeholder='Написати коментар'
                        className={styles.input}
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                    />
                    <button type="submit" className={styles.submitButton}>
                        Відправити
                    </button>
                </form>
            </div>
            {isLoading ? (
                <div>Завантаження коментарів...</div>
            ) : error ? (
                <div>Помилка: {error}</div>
            ) : commentList.length === 0 ? (
                <div>Немає коментарів ще.</div>
            ) : (
                <div>
                    {currentComments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            )}
            {commentList.length > 0 && (
                <div className={`${positioning.row} ${positioning.justifyCenter} ${positioning.alignCenter}`}>
                    {renderPagination()}
                </div>
            )}
        </div>
    );
}