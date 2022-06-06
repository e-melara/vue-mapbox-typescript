import { useStore } from 'vuex';

import { StateInterface } from '@/store';
import { computed, onMounted } from 'vue';

export const usePlacesStore = () => {
	const store = useStore<StateInterface>();

	onMounted(() => {
		if (!store.getters['places/isUserLocationReady']) {
			store.dispatch('places/getInitialLocation');
		}
	});

	return {
		// state
		places: computed(() => store.state.places.placesList),
		isLoading: computed(() => store.state.places.isLoading),
		location: computed(() => store.state.places.useLocation),
		isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
		// getters
		isUserLocationReady: computed(
			() => store.getters['places/isUserLocationReady']
		),
		// actions
		searchPlacesByTerm: (query: string) =>
			store.dispatch('places/searchPlacesByTerm', query),
	};
};

