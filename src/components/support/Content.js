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
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                </div>
                <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800} ${text.alignCenter}`}>
                    Інші способи пошуку допомоги
                </div>
                <div className={styles.cards}>
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                    <Card title={'Обговорення'} description={'Ось що вам потрібно знати.'} image={'/images/roeper_icon.svg'} />
                </div>
            </div>
        </div>
    );
}