import { useState } from 'react';
import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Form = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        region: '',
        month: '',
        day: '',
        year: '',
        email: '',
        name: '',
        surname: '',
        showname: '',
        password: '',
        passwordConfirmation: ''
    });

    const [errors, setErrors] = useState({});

    const months = [
        "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.region.trim()) newErrors.region = 'Країна/Регіон є обов\'язковим';

        if (!formData.year || !formData.month || !formData.day) {
            newErrors.birthDate = 'Дата народження є обов\'язковою';
        } else {
            const paddedMonth = formData.month.padStart(2, '0');
            const paddedDay = formData.day.padStart(2, '0');
            const birthDate = `${formData.year}-${paddedMonth}-${paddedDay}`;
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(birthDate)) {
                newErrors.birthDate = 'Неправильний формат дати';
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Електронна адреса є обов\'язковою';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Неправильний формат електронної адреси';
            }
        }

        if (!formData.name.trim()) newErrors.name = 'Ім\'я є обов\'язковим';
        if (!formData.surname.trim()) newErrors.surname = 'Прізвище є обов\'язковим';
        if (!formData.showname.trim() || formData.showname.length < 3 || formData.showname.length > 16) {
            newErrors.showname = 'Відображуване ім\'я має містити від 3 до 16 символів';
        }

        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
        if (!formData.password.trim()) {
            newErrors.password = 'Пароль є обов\'язковим';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Пароль має бути принаймні 8 символів і містити щонайменше одну цифру, одну велику літеру та спеціальний символ';
        }

        if (formData.password !== formData.passwordConfirmation) {
            newErrors.passwordConfirmation = 'Паролі не співпадають';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const paddedMonth = formData.month.padStart(2, '0');
            const paddedDay = formData.day.padStart(2, '0');
            const birthDate = `${formData.year}-${paddedMonth}-${paddedDay}`;
    
            const payload = {
                login: formData.showname,
                password: formData.password,
                passwordConfirmation: formData.passwordConfirmation,
                email: formData.email,
                firstName: formData.name,
                lastName: formData.surname,
                birthDate: birthDate,
                nickname: formData.showname,
                avatar: 'https://i.pinimg.com/236x/93/d0/36/93d036c1fea31bed8299dc265e717497.jpg',
                description: 'New user', 
                country: formData.region,
                status: 'Just joined' 
            };
    
            console.log('Payload:', payload);
            
            fetch('https://byteserver-b28593dfb543.herokuapp.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        console.error('Server response:', text);
                        throw new Error('Network response was not ok');
                    });
                }
                return response.json();
            }).then(data => {
                console.log('User created successfully:', data);
                router.push('/login');
            }).catch(error => {
                console.error('There was a problem with the request:', error);
            });
        }
    };

    return (
        <div className={styles.smain}>
            <div className={styles.main}>
                <div className={styles.logo}></div>
                <div className={`${styles.h1} ${text.fontWeight800}`}>
                    <h1>Створіть обліковий запис BYTE</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="region"
                        name="region"
                        className={`${styles.inputContainer} ${errors.region && styles.error}`}
                        placeholder="Країна/Регіон"
                        value={formData.region}
                        onChange={handleInputChange}
                    />

                    <div className={styles.divSelect}>
                        <select
                            name="month"
                            className={`${styles.inputContainer} ${styles.customSelect} ${errors.birthDate && styles.error}`}
                            value={formData.month}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Місяць</option>
                            {[...Array(12)].map((_, i) => {
                                const monthNumber = i + 1;
                                const paddedMonth = monthNumber.toString().padStart(2, '0');
                                return <option key={i} value={paddedMonth}>{paddedMonth}</option>
                            })}
                        </select>
                        <select
                            name="day"
                            className={`${styles.inputContainer} ${styles.customSelect} ${errors.birthDate && styles.error}`}
                            value={formData.day}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>День</option>
                            {[...Array(31)].map((_, i) => {
                                const dayNumber = i + 1;
                                const paddedDay = dayNumber.toString().padStart(2, '0');
                                return <option key={i} value={paddedDay}>{paddedDay}</option>
                            })}
                        </select>
                        <select
                            name="year"
                            className={`${styles.inputContainer} ${styles.customSelect} ${errors.birthDate && styles.error}`}
                            value={formData.year}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Рік</option>
                            {[...Array(100)].map((_, i) => {
                                const year = new Date().getFullYear() - i;
                                return <option key={i} value={year}>{year}</option>;
                            })}
                        </select>
                    </div>

                    {errors.birthDate && <p className={styles.errorText}>{errors.birthDate}</p>}

                    <p className={styles.pText}>
                        Будь-ласка введіть вашу дату народження. Це допоможе вам отримати безпечний і веселий досвід незалежно від вашого віку.
                    </p>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`${styles.inputContainer} ${errors.email && styles.error}`}
                        placeholder="Введіть свою електронну адресу"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}

                    <div className={styles.divName}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`${styles.inputContainer} ${errors.name && styles.error}`}
                            placeholder="Ім'я"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            className={`${styles.inputContainer} ${errors.surname && styles.error}`}
                            placeholder="Прізвище"
                            value={formData.surname}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                    {errors.surname && <p className={styles.errorText}>{errors.surname}</p>}

                    <input
                        type="text"
                        id="showname"
                        name="showname"
                        className={`${styles.inputContainer} ${errors.showname && styles.error}`}
                        placeholder="Відображуване ім'я (не можна змінити потім)"
                        value={formData.showname}
                        onChange={handleInputChange}
                    />
                    {errors.showname && <p className={styles.errorText}>{errors.showname}</p>}

                    <p className={styles.pText}>
                        Ваше відображуване ім&apos;я має містити від 3 до 16 символів і може містити літери, цифри, непослідовні тире, крапки, підкреслення та пробіли.
                    </p>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={`${styles.inputContainer} ${errors.password && styles.error}`}
                        placeholder="Введіть ваш пароль"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p className={styles.errorText}>{errors.password}</p>}

                    <input
                        type="password"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        className={`${styles.inputContainer} ${errors.passwordConfirmation && styles.error}`}
                        placeholder="Підтвердьте ваш пароль"
                        value={formData.passwordConfirmation}
                        onChange={handleInputChange}
                    />
                    {errors.passwordConfirmation && <p className={styles.errorText}>{errors.passwordConfirmation}</p>}

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
};

export default Form;