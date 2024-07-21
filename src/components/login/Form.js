import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';


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
                <div>
                    <div></div> {/*left line */}
                    <p>або</p> {/*text between */}
                    <div></div>{/*right line */}
                </div>
            </div>
        </div>
    );
}
export default Form;