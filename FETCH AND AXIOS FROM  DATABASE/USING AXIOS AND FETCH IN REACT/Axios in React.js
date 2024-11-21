//Both Axios and Fetch are powerful tools for handling HTTP requests, 
// so choosing between them depends on your project requirements and the complexity of your API interactions.

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://api.example.com/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

export default DataComponent;


//Use Axios if you need advanced features like request cancellation, response transformation, or want better error handling.