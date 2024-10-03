import { useState, useEffect } from 'react'

import Button from '../layouts/Button'
import AppPresentation from './AppPresentation'

import mainStyle from '../../styles/MainStyle.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import search from '../../styles/layouts/Search.module.css'
import styles from '../../styles/cart/Content.module.css'


export default function Content ({cart}) {
    const {apps} = cart || {apps: [
        {id: 1, title: 'Title 1', image: null, price: 1799},
        {id: 2, title: 'Title 2', image: null, price: 1299},
    ]};

    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    const countTotal = () => {
        const totalSum = apps.reduce((acc, app) => acc + app.price, 0);
        setTotal(totalSum);
    };

    useEffect(() => {
        countTotal();
    }, [apps]);

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed(true);
    }

    const handleBuy = () => {
        // TODO
    }

    return (
        <div className={`${positioning.container}`}>
            <div className={`${positioning.row} ${positioning.justifyEnd} ${text.fontWeight700}`}>
                <form className={search.form}>
                    <button type='submit'>
                        <div className={search.searchIcon} />
                    </button>
                    <input type='text' id='support_input' name='support_input' 
                        placeholder='Пошук' className={search.input} />
                </form>
            </div>
            <div className={`${positioning.row} ${styles.marginTop} ${text.textMedium} ${text.fontWeight800}`}>
                {isConfirmed ? 'ПІДТВЕРДЖЕННЯ' : 'ВАШ КОШИК'}
            </div>
            <div className={`${styles.container}`}>
                <div className={`${positioning.column} ${positioning.dynamic} ${positioning.marginRight20}`}>
                    <br /><hr /><br />
                    <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.uppercase}`}>
                        Спосіб оплати
                    </div>
                    <br />
                    <div className={`${text.fontWeight800} ${text.uppercase}`}>
                        Банківська картка
                    </div>
                    <br />
                    <form className={`${styles.details}`}>
                        <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                            <div className={`${text.textMediumSmall} ${text.fontWeight800}`}>
                                Реквізити картки
                            </div>
                            <div className={`${styles.gap20}`}>
                                <div className={`${styles.mastercard}`}/>
                                <div className={`${styles.visa}`}/>
                            </div>
                        </div>
                        <div className={`${styles.width65}`}>
                            <input type='text' inputmode='numeric' pattern='[0-9\s]{13,19}'
                                autocomplete='cc-number' maxlength='19' id='card_number' 
                                name='card_number' placeholder='* Номер картки' className={styles.input} />
                        </div>
                        <div className={`${styles.width65}`}>
                            <input type='text' maxlength='7' id='card_expire' name='card_expire' 
                                placeholder='* Термін дії' className={styles.input} />
                            <input type='text' inputmode='numeric' maxlength='3' id='card_cvv' 
                                name='card_cvv' placeholder='* CVV' className={styles.input} />
                        </div>
                        <div>
                            *Обов’язково: зберегти цей спосіб оплати для майбутніх покупок?
                        </div>
                        <div className={`${styles.gap20} ${positioning.border}`}>
                            <div>
                                <input type="radio" id="saveYes" name="savePayment" value="true" />
                                <label htmlFor="saveYes" className={`${positioning.marginLeft10}`}>Так</label>
                            </div>
                            <div>
                                <input type="radio" id="saveNo" name="savePayment" value="false" />
                                <label htmlFor="saveNo" className={`${positioning.marginLeft10}`}>Ні</label>
                            </div>
                        </div>
                        <div style={{fontSize: '12px'}}>
                            Якщо зберегти вашу платіжну інформацію, цей спосіб оплати буде обрано за замовчуванням 
                            для всіх покупок, здійснених за допомогою оплати Byte. Ви можете будь-коли видалити 
                            збережену платіжну інформацію на цьому платіжному екрані або увійшовши у свій обліковий 
                            запис Byte і вибравши керування платежами в налаштуваннях облікового запису. 
                            Дізнайтесь більше.
                        </div> 
                    </form>
                </div> 
                {/*isConfirmed ? 
                    <div className={`${positioning.column} ${positioning.dynamic} ${positioning.marginRight20}`}>
                        <br /><hr /><br />
                        <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.uppercase}`}>
                            Спосіб оплати
                        </div>
                        <br />
                        <div className={`${text.fontWeight800} ${text.uppercase}`}>
                            Банківська картка
                        </div>
                        <br />
                        <div className={`${styles.details}`}>
                            <div>
                            </div>
                        </div>
                    </div> 
                    : 
                    <div className={`${positioning.column} ${positioning.dynamic} ${positioning.marginRight20}`}>
                        <br /><hr /><br />
                        <div className={`${positioning.column}`}>
                            {apps.length > 0 && (apps.map((app) => (
                                <div key={app.id}>
                                    <br />
                                    <AppPresentation app={app}/>
                                </div>
                            )))}  
                        </div>
                    </div>
                */}

                <div className={`${styles.total} ${positioning.column}`}>
                    <br /><hr /><br />
                    <div className={`${text.textMediumSmall} ${text.fontWeight800} ${text.uppercase}`}>
                        {isConfirmed ? 'Замовлення' : 'Підсумок'}
                    </div>
                    <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                        <div>
                            Сума покупки
                        </div>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            {total}₴
                        </div>
                    </div>
                    <br /><hr /><br />
                    <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                        <div className={`${text.fontWeight800}`}>
                            ВСЬОГО
                        </div>
                        <div className={`${text.textMedium} ${text.fontWeight200}`}>
                            {(total / 100) * (100 - discount)}₴
                        </div>
                    </div>
                    <br />
                    {isConfirmed ? 
                        <div onClick={handleBuy}>
                            <Button >Придбати</Button>
                        </div>   
                        : 
                        <div onClick={handleConfirm}>
                            <Button >Підтвердити</Button>
                        </div>  
                    }
                </div>
            </div>
        </div>
    );
}