import { ActionTree } from 'vuex';

import { StateInterface } from '..';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
	someAction() {},
};

export default actions;

