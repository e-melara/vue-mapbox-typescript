import { Module } from 'vuex';
import { StateInterface } from '..';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { PlacesState } from './state';

const exampleModule: Module<PlacesState, StateInterface> = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
};

export default exampleModule;

