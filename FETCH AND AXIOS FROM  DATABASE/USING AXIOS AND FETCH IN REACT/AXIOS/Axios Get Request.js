import axios from 'axios';

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data); // logs the response data
    })
    .catch(error => {
        console.error('Error fetching data:', error); // error handling
    });
