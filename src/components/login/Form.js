import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { useUser } from '../../contexts/UserContext'; // Import the UserContext

const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUser } = useUser(); // Access the setUser function from context

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://byteserver-b28593dfb543.herokuapp.com/auth/login', {
            login,
            password
        }, { withCredentials: true }); // Ensure credentials are sent

        const { user } = response.data; // Get the user data from the response

        if (user && user.id) {
            setUser(user); // Save user data in the context
            // Redirect to the profile page with the user's ID
            router.push(`/profiles/${user.id}`);
        }
    } catch (err) {
        setError('Invalid login or password');
        console.error('Login error:', err.response || err);
    }
};



  return (
    <div className={`${styles.smain}`}>
      <div className={`${styles.main}`}>
        <div className={`${styles.logo}`}></div>
        <div className={`${styles.h1} ${text.fontWeight800}`}>
          <h1>Увійдіть у свій обліковий запис BYTE</h1>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="login"
            id="login"
            name="login"
            className={styles.inputContainer}
            placeholder="Введіть свій логін"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            className={styles.inputContainer}
            placeholder="Введіть ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.Submit}>УВІЙТИ</button>
        </form>
        <div className={`${styles.aboDiv}`}>
          <div className={`${styles.decDiv}`}></div>
          <p className={`${styles.abo}`}>або</p>
          <div className={`${styles.decDiv}`}></div>
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
};

export default Form;
