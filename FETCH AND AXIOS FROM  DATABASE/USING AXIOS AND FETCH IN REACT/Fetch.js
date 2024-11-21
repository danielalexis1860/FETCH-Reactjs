//Both Axios and Fetch are powerful tools for handling HTTP requests, 
// so choosing between them depends on your project requirements and the complexity of your API interactions.

import React, { useEffect, useState } from 'react';

const DataComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};

export default DataComponent;


//Use Fetch if you want a lightweight solution without installing dependencies and can manage without the extra features of Axios.
