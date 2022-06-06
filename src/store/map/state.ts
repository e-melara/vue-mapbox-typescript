import Mapboxgl from 'mapbox-gl';

export interface MapState {
	map?: Mapboxgl.Map;
	markers: Mapboxgl.Marker[];
	distance?: number;
	duration?: number;
}

function state(): MapState {
	return {
		markers: [],
		map: undefined,
		distance: undefined,
		duration: undefined,
	};
}

export default state;

