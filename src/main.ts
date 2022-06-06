import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken =
	'pk.eyJ1IjoiZS1tZWxhcmEiLCJhIjoiY2tkbzUzeW05MTBwNjJ1cGVhN3RmdGJyZiJ9.0pJ4LNxR2U1Ja-NfNqsG4w';
if (!navigator.geolocation) {
	throw new Error('Tu navegador no soporta el Geolocation');
}

createApp(App).use(store).use(router).mount('#app');

