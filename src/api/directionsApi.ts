import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		steps: false,
		alternatives: true,
		geometries: 'geojson',
		overview: 'simplified',
		access_token:
			'pk.eyJ1IjoiZS1tZWxhcmEiLCJhIjoiY2tkbzUzeW05MTBwNjJ1cGVhN3RmdGJyZiJ9.0pJ4LNxR2U1Ja-NfNqsG4w',
	},
});

export default searchApi;

