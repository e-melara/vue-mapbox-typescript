import { GetterTree } from 'vuex';

import { StateInterface } from '..';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
	someGetter() {},
};

export default getters;

