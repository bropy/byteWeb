import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';
import { useState, useRef, useEffect } from 'react';


const Form = () => {
    
    return(
        <div className={`${styles.smain}`}>
            <div className={`${styles.main}`}>
                <div className={`${styles.logo}`}>

                </div>
                <div className={`${styles.h1} ${text.fontWeight800}`}>
                    <h1>Увійдіть у свій обліковий запис BYTE</h1>
                </div>
                <form> 
                    <input type="email" id="email" name="email" className={styles.inputContainer} placeholder='Введіть свою електронну адресу' />
                    <input type="password" id="password" name="password" className={styles.inputContainer} placeholder='Введіть ваш пароль' />
                    <button type='submit'className={styles.Submit}>УВІЙТИ</button>
                </form>
                <div  className={`${styles.aboDiv}`}>
                    <div className={`${styles.decDiv}`}></div> {/*left line */}
                    <p className={`${styles.abo}`}>або</p> {/*text between */}
                    <div className={`${styles.decDiv}`}></div>{/*right line */}
                </div>
                <div className={`${styles.iconGrid}`}>
                    <button className={`${styles.iconButton} ${styles.googleIcon}`}></button>
                    <button className={`${styles.iconButton} ${styles.facebookIcon}`}></button>
                    <button className={`${styles.iconButton} ${styles.appleIcon}`}></button>
                    <button className={`${styles.iconButton} ${styles.steamIcon}`}></button>
                    <button className={`${styles.iconButton} ${styles.xboxIcon}`}></button>
                    <button className={`${styles.iconButton} ${styles.playstationIcon}`}></button>
                </div>
                <a href="#" className={`${styles.linkText}`}>Не можете увійти або забули пароль?</a>
                <Link href="/register" className={`${styles.linkText}`}>Створити акаунт</Link>

            </div>
        </div>
    );
}
export default Form;