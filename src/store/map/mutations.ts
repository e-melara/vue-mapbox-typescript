import Mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';

import { MapState } from './state';

const mutations: MutationTree<MapState> = {
	setMap(state, map: Mapboxgl.Map) {
		state.map = map;
	},
};

export default mutations;

