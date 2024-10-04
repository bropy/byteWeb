import React from 'react';

import text from '../../styles/Text.module.css';
import styles from '../../styles/profile/Modal.module.css';


export default function Modal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};