import React, { useState } from 'react';

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/layouts/Select.module.css';


export default function Select ({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(option => option.value === value);
    const displayValue = selectedOption ? selectedOption.label : "Select an option";

    const handleSelect = (selectedOption) => {
        onChange(selectedOption.value);
        setIsOpen(false);
    };

    const handleBlur = () => {
        setIsOpen(false);
    };


    return (
        <div className={`${styles.selectWrapper} ${mainStyle.interactive} ${positioning.row} 
            ${positioning.alignCenter} ${text.textSmall} ${text.fontWeight600}`}
            tabIndex={0} onBlur={handleBlur}>
            <div className={styles.select}
                onClick={() => setIsOpen(prev => !prev)}>
                <div className={positioning.marginRight20}>
                    {displayValue}
                </div>
                <div className={`${styles.collapsibleSign} ${isOpen && styles.rotate}`} />
            </div>

            {isOpen && (
                <div className={styles.options}>
                    {options.map((option, index) => (
                        <div key={index} className={styles.option}
                            onClick={() => handleSelect(option)}>
                            {option.label} 
                        </div>
                    ))}
                </div>
            )}
        </div>        
    );
};