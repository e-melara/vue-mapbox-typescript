import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
	params: {
		limit: 5,
		language: 'es',
		access_token:
			'pk.eyJ1IjoiZS1tZWxhcmEiLCJhIjoiY2tkbzUzeW05MTBwNjJ1cGVhN3RmdGJyZiJ9.0pJ4LNxR2U1Ja-NfNqsG4w',
	},
});

export default searchApi;
