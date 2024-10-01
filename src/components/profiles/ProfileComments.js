import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';

import Comment from './Comment';

import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileComments.module.css';
import commentStyles from '../../styles/profile/Comment.module.css';
import Comment from './Comment';
import { useUser } from '../../contexts/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProfileComments({ profileId }) {
    const [commentList, setCommentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;
    const [newCommentText, setNewCommentText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user } = useUser();
    const router = useRouter();

    const fetchComments = useCallback(async () => {
        if (!profileId) {
            setError('Profile ID is undefined');
            return;
        }
        
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/profiles/${profileId}/comments`);
            if (!response.ok) {
                throw new Error(`Failed to fetch comments: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setCommentList(data);
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
    
        if (!user || !user.id) {
            setError('User is not logged in');
            router.push('/login');
            return;
        }
    
        if (!profileId) {
            setError('Cannot add comment: Profile ID is undefined');
            return;
        }
    
        if (newCommentText.trim() === '') {
            setError('Comment cannot be empty');
            return;
        }
    
        setIsLoading(true);
        setError(null);
    
        try {
            const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/profiles/${profileId}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: newCommentText,
                    profileReceiverId: profileId,
                    profileSenderId: user.id
                }),
                credentials: 'include'
            });
    
            if (!response.ok) {
                throw new Error(`Failed to post comment: ${response.status} ${response.statusText}`);
            }
    
            const newComment = await response.json();
            setCommentList(prevComments => [...prevComments, newComment]);
            setNewCommentText('');
            setCurrentPage(Math.ceil((commentList.length + 1) / commentsPerPage));
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // ... (pagination functions remain the same)

    return (
        <div>
            <div className={`${positioning.row} ${text.upperCase} ${text.textMedium} ${text.fontWeight800} ${styles.title}`}>
                Коментарі
            </div>

            {error && <div className={styles.error}>{error}</div>}

            {!error && (
                <>
                    {user ? (
                        <div className={`${positioning.row} ${commentStyles.comment} ${positioning.alignCenter}`}>
                            <Link href={`/profiles/${user.id}`} className={`${commentStyles.avatar}`}>
                                <Image
                                    src={user.avatar || "/default-avatar.png"}
                                    alt={`${user.nickname} Avatar`}
                                    width={50}
                                    height={50}
                                />
                            </Link>
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
                                <button type="submit" className={styles.submitButton} disabled={isLoading}>
                                    {isLoading ? 'Відправлення...' : 'Відправити'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <button
                            className={styles.loginButton}
                            onClick={() => router.push('/login')}
                        >
                            Увійдіть, щоб залишити коментар
                        </button>
                    )}

                    {isLoading ? (
                        <div>Завантаження коментарів...</div>
                    ) : commentList.length === 0 ? (
                        <div>Немає коментарів ще.</div>
                    ) : (
                        <div>
                            {currentComments.map((comment) => (
                                <Comment key={comment.id} comment={comment} />
                            ))}
                        </div>
                    )}

                    {commentList.length > commentsPerPage && (
                        <div className={`${positioning.row} ${positioning.justifyCenter} ${positioning.alignCenter}`}>
                            {renderPagination()}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}