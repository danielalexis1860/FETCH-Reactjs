// src/components/UserList.js

//handle the fetching and displaying of user data.
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ useAxios }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                let response;
                if (useAxios) {
                    // Fetching data with Axios
                    response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    setUsers(response.data);
                } else {
                    // Fetching data with Fetch
                    response = await fetch('https://jsonplaceholder.typicode.com/users');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setUsers(data);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [useAxios]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
