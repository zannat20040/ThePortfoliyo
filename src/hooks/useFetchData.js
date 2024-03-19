import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetchData = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const userId = '65b3a22c01d900e96c4219ae'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);

                
                setUserData(response.data.user);
            } catch (error) {
                setError(error)
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId]);

    return { userData, error };
};

export default useFetchData;