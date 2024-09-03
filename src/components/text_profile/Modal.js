import React from 'react';
import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/Modale.module.css';

export default function FriendsModal ({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={`${text.textBlack} ${text.textMedium} ${text.fontWeight800}`}>
                    {title}
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};