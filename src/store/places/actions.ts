import { ActionTree } from 'vuex';

import { searchApi } from '@/api';
import { StateInterface } from '..';
import { PlacesState } from './state';
import { Feature, PlacesResponse } from '@/interfaces';

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
	async searchPlacesByTerm(
		{ commit, state },
		query: string
	): Promise<Feature[]> {
		if (query.length === 0) {
			commit('setPlaces', []);
			return [];
		}

		if (!state.useLocation) {
			throw new Error('No hay ubicación del usuario');
		}

		commit('setLoadingPlaces');
		const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
			params: {
				proximity: state.useLocation?.join(','),
			},
		});
		commit('setPlaces', response.data.features);
		return response.data.features;
	},
};

export default actions;

