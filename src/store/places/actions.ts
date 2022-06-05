import { ActionTree } from 'vuex';

import { StateInterface } from '..';
import { PlacesState } from './state';

const actions: ActionTree<PlacesState, StateInterface> = {
	getInitialLocation({ commit }) {
		navigator.geolocation.getCurrentPosition(
			({ coords }) =>
				commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
			error => {
				console.error(error);
				throw new Error('No geolocation :(');
			}
		);
	},
};

export default actions;

