import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    // Check user from local storage on mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://byteserver-b28593dfb543.herokuapp.com/auth/user', { withCredentials: true });
                if (response.data.user) {
                    setUser(response.data.user);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log('User not authenticated');
                    // Optionally, redirect to login or handle it differently
                    router.push('/login'); // Redirect to login
                } else {
                    console.error('Error fetching user:', error);
                }
            }
        };
    
        fetchUser();
    }, []);
    
    // Save user to localStorage when it's updated
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const logout = () => {
        setUser(null);
        router.push('/login');
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};
