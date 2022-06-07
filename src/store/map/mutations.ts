import Mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';

import { MapState } from './state';
import { Feature } from '@/interfaces';

const mutations: MutationTree<MapState> = {
	setMap(state, map: Mapboxgl.Map) {
		state.map = map;
	},

	setDistanceDuraction(
		state,
		{ distance, duration }: { distance: number; duration: number }
	) {
		let kms = distance / 1000;
				kms = Math.round(kms * 100);
				kms /= 100;

		state.distance = kms;
		state.duration = Math.floor(duration / 60);
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
		// clear poyline
		if (state.map?.getLayer('RouteString')) {
			state.map.removeLayer('RouteString');
			state.map.removeSource('RouteString');
			state.distance = undefined;
			state.duration = undefined;
		}
	},
	setRoutePolyline(state, coords: number[][]) {
		const end = coords[1];
		const start = coords[coords.length - 1];

		const bounds = new Mapboxgl.LngLatBounds(
			[start[0], start[1]],
			[end[0], end[1]]
		);

		for (const coord of coords) {
			const newCoords: [number, number] = [coord[0], coord[1]];
			bounds.extend(newCoords);
		}

		state.map?.fitBounds(bounds, { padding: 300 });

		const sourceData: Mapboxgl.AnySourceData = {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'LineString',
							coordinates: coords,
						},
					},
				],
			},
		};

		if (state.map?.getLayer('RouteString')) {
			state.map.removeLayer('RouteString');
			state.map.removeSource('RouteString');
		}

		state.map?.addSource('RouteString', sourceData);
		state.map?.addLayer({
			type: 'line',
			id: 'RouteString',
			source: 'RouteString',
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
			},
			paint: {
				'line-color': 'black',
				'line-width': 3,
			},
		});
	},
};

export default mutations;

