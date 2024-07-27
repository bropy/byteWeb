import styles from '../../styles/SupportPageContent.module.css'
import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'


const Content = () => {
    return (
        <div className={`${text.textBlack} ${text.textSmall} ${text.fontWeight600}`}>
            <div className={styles.container}>
                <div className={styles.support}>
                    <div className={`${text.textLarge} ${text.textUppercase} ${text.fontWeight800}`}>
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
            </div>
            <div className={styles.container}>
                <div className={styles.promptText}>
                    <div className={`${text.textMedium} ${text.textUppercase} ${text.fontWeight800}`}>
                        Потрібна допомога? Ми тут
                    </div>
                    <div>
                        Від налаштувань облікового запису до дозволів – знайдіть довідку щодо всього Byte
                    </div>
                    <div>
                        Якщо ви новачок у Byte і шукаєте поради, перегляньте наш Посібник для початківців
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Оголошення
                        </div>
                        <div>
                            Ось що вам потрібно знати.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Основи byte
                        </div>
                        <div>
                            Почніть з тієї ноги!
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Налаштування аккаунта
                        </div>
                        <div>
                            Все про ваш аккаунт.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Ігри, програми тощо
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Покупки
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Покупки
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Спільнота byte
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Безпека і конфіденційність
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            помилки та їх усунення (відомі)
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Програми та дії
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Програми та дії
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = '/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Програми та дії
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                    </div>
                </div>
                <div className={`${text.textMediumSmall} ${text.textUppercase} ${text.fontWeight800} ${text.textAlignCenter}`}>
                    Інші способи пошуку допомоги
                </div>
                <div className={styles.cards}>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = 'https://www.reddit.com/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Reddit
                        </div>
                        <div>
                            Є швидке запитання? Напишіть у Reddit!
                        </div>
                    </div>
                    <div className={`${styles.card} ${styles.interactive}`}
                    onClick={() => window.location.href = 'https://www.x.com/'}>
                        <div className={styles.image}></div>
                        <div className={`${text.textUppercase} ${text.fontWeight800}`}>
                            Twitter(x)
                        </div>
                        <div>
                            Є швидке запитання? Напишіть нам у Twitter(X)!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;