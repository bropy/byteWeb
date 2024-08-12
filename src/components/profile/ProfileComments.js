import React, { useState } from 'react';
import text from '../../styles/Text.module.css';
import positioning from '../../styles/Positioning.module.css';
import styles from '../../styles/profile/ProfileComments.module.css';
import Comment from './Comment';

export default function ProfileComments({ comments }) {
    // TODO: Sort Comments by Date

    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;
    const totalPages = Math.ceil(comments.length / commentsPerPage);

    const currentComments = comments.slice(
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
                disabled={currentPage == 1}
            >
                &lt;
            </button>
        );

        pages.push(
            <button
                key={1}
                className={`${styles.button} ${currentPage == 1 ? styles.active : styles.interactive}`}
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
                    className={`${styles.button} ${currentPage == i ? styles.active : styles.interactive}`}
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
                    className={`${styles.button} ${currentPage == totalPages ? styles.active : styles.interactive}`}
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
                disabled={currentPage == totalPages}
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
            <div>
                ToDo: Search
            </div>
            <div>
                {currentComments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
            <div className={`${positioning.row} ${positioning.justifyCenter} ${positioning.alignCenter}`}>
                {renderPagination()}
            </div>
        </div>
    );
}
