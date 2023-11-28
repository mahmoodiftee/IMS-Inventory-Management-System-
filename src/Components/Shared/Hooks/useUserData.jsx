import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const useUserData = () => {
    const { user } = useContext(AuthContext);
    const [manager, setManager] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const usersResponse = await axios.get('http://localhost:5000/users');
                const allUsers = usersResponse.data;
                const userInfo = allUsers.find(u => u.email === user?.email);
                setManager(userInfo);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user]);

    return { manager, setManager };
};

export default useUserData;
