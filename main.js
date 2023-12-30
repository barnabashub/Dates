fetch('http://your-laravel-app/api/get-all-data')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
