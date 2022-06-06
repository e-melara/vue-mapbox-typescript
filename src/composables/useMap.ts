import { computed } from 'vue';

import Mapboxgl from 'mapbox-gl';
import { useStore } from 'vuex';

import { StateInterface } from '@/store';

export const useMapStore = () => {
	const store = useStore<StateInterface>();

	return {
		map: computed(() => store.state.map.map),
		distance: computed(() => store.state.map.distance),
		duration: computed(() => store.state.map.duration),

		// getters
		isReady: computed(() => store.getters['map/isMapReady']),

		// mutations
		setMap(map: Mapboxgl.Map) {
			store.commit('map/setMap', map);
		},
		// Actions
	};
};

