import { GetterTree } from 'vuex';

import { StateInterface } from '..';
import { PlacesState } from './state';

const getters: GetterTree<PlacesState, StateInterface> = {
	isUserLocationReady(state) {
		return !!state.useLocation;
	},
};

export default getters;

