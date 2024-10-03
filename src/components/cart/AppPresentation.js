import { useState, useEffect } from 'react'

import Button from '../layouts/Button'

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import search from '../../styles/layouts/Search.module.css'
import styles from '../../styles/cart/AppPresentation.module.css'


export default function AppPresentation ({app}) {
    const {title = 'Title Not Found', image = null, price = 0} = app || {};

    const handleAddToWishlist = () => {
        // TODO
    }

    const handleRemove = () => {
        // TODO
    }

    return (
    <div className={`${styles.container}`}>
        <div className={`${styles.image}`}
            style={{backgroundImage: `url(${image})`}}/>
        <div className={`${styles.info}`}>
            <div className={`${text.textMediumSmall} ${text.fontWeight800}`}>
                {title}
            </div>
            <div className={`${text.textMedium} ${text.fontWeight200}`}>
                {price}₴
            </div>
            <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                <div className={`${mainStyle.interactive} ${text.textDarkGray} ${text.underline}`}
                    onClick={handleAddToWishlist}>
                    До бажаного
                </div>
                <div className={`${mainStyle.interactive} ${text.textDarkGray} ${text.underline}`}
                    onClick={handleRemove}>
                    Вилучити
                </div>
            </div>
        </div>
    </div>
    );
}