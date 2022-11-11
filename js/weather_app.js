let ville_js = document.querySelector('.ville');
let temperature_js = document.querySelector('.temperature');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5b5153efamsh82947746f6d9465p101ee8jsna2348c840952',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));