// src/App.js
//switch between Axios and Fetch for fetching user data.
import React, { useState } from 'react';
import UserList from './components/UserList';

const App = () => {
    const [useAxios, setUseAxios] = useState(true);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Fetch Users with {useAxios ? "Axios" : "Fetch"}</h1>
            <button onClick={() => setUseAxios(!useAxios)}>
                Switch to {useAxios ? "Fetch" : "Axios"}
            </button>
            <UserList useAxios={useAxios} />
        </div>
    );
};

export default App;
