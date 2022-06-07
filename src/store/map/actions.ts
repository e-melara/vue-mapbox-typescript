import { ActionTree } from 'vuex';

import { StateInterface } from '..';
import { MapState } from './state';
import { directionApi } from '@/api';

import { DirectionResponse } from '@/interfaces/directions';

export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
	async getRoutesBetweenPoints(
		{ commit },
		{ start, end }: { start: LngLat; end: LngLat }
	) {
		const response = await directionApi.get<DirectionResponse>(
			`${start.join(',')};${end.join(',')}`
		);
		commit('setDistanceDuraction', {
			distance: response.data.routes[0].distance,
			duration: response.data.routes[0].duration,
		});
		commit('setRoutePolyline', response.data.routes[0].geometry.coordinates);
	},
};

export default actions;

