axios.post('https://api.example.com/data', {
    name: 'John Doe',
    age: 30
})
.then(response => {
    console.log('Data posted successfully:', response.data);
})
.catch(error => {
    console.error('Error posting data:', error);
});
