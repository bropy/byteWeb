import Card from './Card.js'

import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import styles from '../../styles/support/Content.module.css'


export default function Content () {
    return (
        <div className={`${text.textSmall} ${text.fontWeight600}`}>
            <div className={`${positioning.container} ${styles.marginBottom10}`}>
                <div className={`${text.textLarge} ${text.uppercase} ${text.fontWeight800}`}>
                    Підтримка
                </div>
                <form className={styles.form}>
                    <button type='submit'>
                        <div className={styles.searchIcon} />
                    </button>
                    <input type='text' id='support_input' name='support_input' 
                    placeholder='Пошук' className={styles.input} />
                </form>
            </div>
            <div className={positioning.container}>
                <div className={`${styles.promptText} ${styles.marginBottom5}`}>
                    <div className={styles.promptTextContent}>
                        <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800}`}>
                            Потрібна допомога? Ми тут
                        </div>
                        <div>
                            Від налаштувань облікового запису до дозволів – знайдіть довідку щодо всього Byte
                        </div>
                        <div>
                            Якщо ви новачок у Byte і шукаєте поради, перегляньте наш Посібник для початківців
                        </div>
                    </div>

                </div>
                <div className={`${styles.cards} ${styles.marginBottom5}`}>
                    <Card 
                        title={'Обговорення'} 
                        image={'/images/roeper_icon.svg'}  />
                    <Card 
                        title={'Основи byte'} 
                        description={'Почніть з тієї ноги!'} 
                        image={'/images/document_icon.svg'} />
                    <Card 
                        title={'Налаштування аккаунта'} 
                        description={'Все про ваш аккаунт.'} 
                        image={'/images/gear_icon.svg'} />
                    <Card 
                        title={'Ігри, програми тощо'} 
                        image={'/images/gamepad_icon.svg'} />
                    <Card 
                        title={'Обмін'} 
                        image={'/images/exchange_icon.svg'} />
                    <Card 
                        title={'Покупки'} 
                        image={'/images/cart_icon.svg'} />
                    <Card 
                        title={'Спільнота byte'} 
                        image={'/images/community_icon.svg'} />
                    <Card 
                        title={'Безпека і конфіденційність'} 
                        image={'/images/security_icon.svg'} />
                    <Card 
                        title={'Помилки та їх усунення(відомі)'} 
                        image={'/images/error_icon.svg'} />
                    <Card 
                        title={'Програми та дії'} 
                        image={'/images/stabilization_icon.svg'} />
                    <Card 
                        title={'Обладнання'} 
                        image={'/images/laptop_icon.svg'} />
                    <Card 
                        title={'Клієнт Byte'} 
                        image={'/images/hat_icon.svg'} />
                </div>
                <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800} ${text.alignCenter}`}>
                    Інші способи пошуку допомоги
                </div>
                <div className={styles.cards}>
                    <Card 
                        title={'Reddit'} 
                        description={'Є швидке запитання? Напишіть у Reddit!'} 
                        image={'/images/reddit_icon.svg'}
                        href={'https://www.reddit.com/'} />
                    <Card 
                        title={'Twitter(x)'} 
                        description={'Є швидке запитання? Напишіть нам у Twitter(X)!'} 
                        image={'/images/twitter_icon.svg'}
                        href={'https://www.x.com/'} />
                </div>
            </div>
        </div>
    );
}