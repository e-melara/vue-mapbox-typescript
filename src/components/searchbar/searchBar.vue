<template>
	<div class="search-container">
		<input
			type="text"
			class="form-control"
			v-model="searchTerm"
			placeholder="Buscar lugares ..."
		/>
		<SearchResults />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { usePlacesStore } from '@/composables';
import SearchResults from '@/components/search-results/SearchResults.vue';

export default defineComponent({
	components: {
		SearchResults,
	},
	setup() {
		const debounceTimeout = ref();
		const debouncedValued = ref('');

		const usePlaces = usePlacesStore();

		return {
			// computed
			searchTerm: computed({
				set(val: string) {
					if (debounceTimeout.value) {
						clearTimeout(debounceTimeout.value);
					}
					debounceTimeout.value = setTimeout(() => {
						debouncedValued.value = val;
						usePlaces.searchPlacesByTerm(val);
					}, 500);
				},
				get() {
					return debouncedValued.value;
				},
			}),
		};
	},
});
</script>

<style scoped>
.search-container {
	top: 30px;
	left: 30px;
	position: fixed;
	width: 300px;
	z-index: 999;
	padding: 5px;
	overflow: hidden;
	background-color: white;
	border-radius: 10px !important;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>

