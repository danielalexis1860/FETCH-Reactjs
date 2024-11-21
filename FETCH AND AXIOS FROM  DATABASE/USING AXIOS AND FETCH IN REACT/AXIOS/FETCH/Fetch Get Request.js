fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // parse JSON data
    })
    .then(data => {
        console.log(data); // logs the response data
    })
    .catch(error => {
        console.error('Error fetching data:', error); // error handling
    });
