import { MutationTree } from 'vuex';

import { PlacesState } from './state';

const mutations: MutationTree<PlacesState> = {
	setLngLat(state: PlacesState, coords: { lng: number; lat: number }) {
		state.useLocation = [coords.lng, coords.lat];
		state.isLoading = false;
	},
};

export default mutations;

