import { MutationTree } from 'vuex';

import { PlacesState } from './state';
import { Feature } from '@/interfaces';

const mutations: MutationTree<PlacesState> = {
	setLngLat(state: PlacesState, coords: { lng: number; lat: number }) {
		state.useLocation = [coords.lng, coords.lat];
		state.isLoading = false;
	},
	setLoadingPlaces(state: PlacesState) {
		state.isLoading = true;
	},
	setPlaces(state, places: Feature[]) {
		state.isLoading = false;
		state.placesList = places;
	},
};

export default mutations;

