import { useState, useEffect } from 'react';
import styles from '../../styles/Form.module.css';
import text from '../../styles/Text.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import stylesq from '../../styles/AddGameForm.module.css';


const Form = ({ userId }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        region: '',
        email: '',
        name: '',
        surname: '',
        showname: '',
        status: '',
        avatar: null // Add avatar field
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Fetch existing profile data
        fetch(`https://byteserver-b28593dfb543.herokuapp.com/profiles/${userId}`)
            .then(response => response.json())
            .then(data => {
                // Assuming the data structure matches the form fields
                setFormData({
                    region: data.country || '',
                    email: data.email || '',
                    name: data.firstName || '',
                    surname: data.lastName || '',
                    showname: data.nickname || '',
                    status: data.status || '',
                    avatar: null // Keep avatar as null for the moment
                });
            })
            .catch(error => console.error('Error fetching profile data:', error));
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, avatar: file }));
    };

    const uploadAvatar = async (file) => {
        if (!file) return null;

        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to upload image');
        }

        const { url } = await response.json();
        return url;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            nickname: formData.showname || undefined,
            avatar: formData.avatar || undefined,
            description: formData.region || undefined,
            country: formData.country || undefined,
            status: formData.status || undefined

        };
    
        // Only upload avatar if it exists
        if (formData.avatar) {
            const avatarUrl = await uploadAvatar(formData.avatar);
            payload.avatar = avatarUrl;
        }
    
        const response = await fetch(`https://byteserver-b28593dfb543.herokuapp.com/profiles/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload), // Send only the changed fields
        });
    
        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch (error) {
                console.error('Failed to parse error response:', error);
                console.error('Server response status:', response.status);
                throw new Error('Network response was not ok');
            }
    
            console.error('Server response:', errorData);
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('Profile updated successfully:', data);
        router.push('/'); // Redirect after successful update
    };
    

    return (
        <div className={styles.smain}>
            <div className={styles.main}>
                <div className={styles.logo}></div>
                <div className={`${styles.h1} ${text.fontWeight800}`}>
                    <h1>Оновіть обліковий запис BYTE</h1>
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

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`${styles.inputContainer} ${errors.email && styles.error}`}
                        placeholder="Електронна адреса"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    {errors.email && <p className={styles.errorText}>{errors.email}</p>}


                    <input
                        type="text"
                        id="status"
                        name="status"
                        className={`${styles.inputContainer} ${errors.status && styles.error}`}
                        placeholder="Статус"
                        value={formData.status}
                        onChange={handleInputChange}
                    />

                    {errors.status && <p className={styles.errorText}>{errors.status}</p>}

                    <label className={styles.labelq} htmlFor="avatar">
                        <span>Аватар</span>
                        <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            onChange={handleAvatarChange}
                        />
                    </label>

                    <button type="submit" className={stylesq.button}>Оновити обліковий запис</button>
                </form>
            </div>
        </div>
    );
};

export default Form;