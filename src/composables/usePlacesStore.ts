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
		isLoading: computed(() => store.state.places.isLoading),
		location: computed(() => store.state.places.useLocation),
		// getters
		isUserLocationReady: computed(
			() => store.getters['places/isUserLocationReady']
		),
	};
};

