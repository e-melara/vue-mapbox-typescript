import Mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';

import { MapState } from './state';
import { Feature } from '@/interfaces';

const mutations: MutationTree<MapState> = {
	setMap(state, map: Mapboxgl.Map) {
		state.map = map;
	},

	setPlaceMarkets(state, places: Feature[]) {
		state.markers.forEach(marker => marker.remove());
		state.markers = [];

		if (!state.map) return;

		for (const place of places) {
			const [lng, lat] = place.center;

			const popus = new Mapboxgl.Popup()
				.setLngLat([lng, lat])
				.setHTML(`<h5>${place.text_es}</h5><p>${place.place_name_es}</p>`)
				.addTo(state.map);

			const market = new Mapboxgl.Marker()
				.setLngLat([lng, lat])
				.setPopup(popus)
				.addTo(state.map);
				
			state.markers.push(market);
		}
	},
};

export default mutations;

