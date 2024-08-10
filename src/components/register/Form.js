import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';

const Form = () => {
    const months = [
        "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
    ];

    return (
        <div className={styles.smain}>
            <div className={styles.main}>
                <div className={styles.logo}></div>
                <div className={`${styles.h1} ${text.fontWeight800}`}>
                    <h1>Створіть обліковий запис BYTE</h1>
                </div>
                <form>
                    <input type="text" id="region" name="region" className={styles.inputContainer} placeholder='Країна/Регіон' />

                    <div className={styles.divSelect}>
                        <select name="month" className={`${styles.inputContainer} ${styles.customSelect}`}>
                            <option value="">Місяць</option>
                            {months.map((month, index) => (
                            <option key={index} value={index + 1}>{month}</option>
                            ))}
                        </select>

                        <select name="day" className={`${styles.inputContainer} ${styles.customSelect}`}>
                            <option value="">День</option>
                            {[...Array(31)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>

                        <select name="year" className={`${styles.inputContainer} ${styles.customSelect}`}>
                            <option value="">Рік</option>
                            {[...Array(100)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={i} value={year}>{year}</option>;
                            })}
                        </select>
                        </div>

                    <p className={styles.pText}>
                        Будь-ласка введіть вашу дату народження. Це допоможе вам отримати безпечний і веселий досвід незалежно від вашого віку.
                    </p>

                    <input type="email" id="email" name="email" className={styles.inputContainer} placeholder='Введіть свою електронну адресу' />
                    
                    <div className={styles.divName}>
                        <input type="text" id="name" name="name" className={styles.inputContainer} placeholder="Ім'я" />
                        <input type="text" id="surname" name="surname" className={styles.inputContainer} placeholder='Прізвище' />
                    </div>

                    <input type="text" id="showname" name="showname" className={styles.inputContainer} placeholder="Відображуване ім'я" />
                    
                    <p className={styles.pText}>
                        Ваше відображуване ім'я має містити від 3 до 16 символів і може містити літери, цифри, непослідовні тире, крапки, підкреслення та пробіли.
                    </p>

                    <input type="password" id="password" name="password" className={styles.inputContainer} placeholder='Введіть ваш пароль' />
                    
                    <p className={styles.pText}>
                        Паролі мають містити 7+ символів, принаймні 1 цифру, принаймні 1 літеру та без пробілів.
                    </p>

                    <button type='submit' className={styles.Submit}>ДАЛІ</button>
                </form>

                <div className={styles.aboDiv}>
                    <div className={styles.decDiv}></div>
                    <p className={styles.abo}>або</p>
                    <div className={styles.decDiv}></div>
                </div>

                <div className={styles.iconGrid}>
                    {['google', 'facebook', 'apple', 'steam', 'xbox', 'playstation'].map((icon) => (
                        <button key={icon} className={`${styles.iconButton} ${styles[`${icon}Icon`]}`}></button>
                    ))}
                </div>

                <p className={styles.pText}>
                    Вже маєте обліковий запис?
                    <Link href="/login" className={`${styles.linkText}`}>Увійти</Link>

                </p>
            </div>
        </div>
    );
}

export default Form;