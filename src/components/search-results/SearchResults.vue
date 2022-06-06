<template>
	<div class="alert alert-primary text-center" v-if="isLoadingPlaces">
		<h5>Cargando</h5>
		<span>Espere por favor ....</span>
	</div>

	<ul class="list-group mt-3" v-else-if="places.length > 0">
		<li
			:key="place.id"
			v-for="place in places"
			@click="onPlaceClicked(place)"
			class="list-group-item list-group-item-action"
			:class="{ active: place.id === activePlace }"
		>
			<h5>{{ place.text }}</h5>
			<p>{{ place.place_name_es }}</p>
			<div align="right">
				<button
					class="btn btn-sm btn-outline-primary"
					:class="
						place.id === activePlace
							? 'btn-outline-light'
							: 'btn-outline-primary'
					"
				>
					Direcciones
				</button>
			</div>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import { Feature } from '@/interfaces';
import { useMapStore, usePlacesStore } from '@/composables';

export default defineComponent({
	name: 'SearchResults',
	setup() {
		const activePlace = ref('');
		const { map, setPlaceMarkers } = useMapStore();
		const { isLoadingPlaces, places } = usePlacesStore();

		watch(places, newPlaces => {
			if (places) {
				setPlaceMarkers(newPlaces);
			}
		});

		return {
			places,
			activePlace,
			isLoadingPlaces,

			// events
			onPlaceClicked(place: Feature) {
				activePlace.value = place.id;
				const [lng, lat] = place.center;
				map.value?.flyTo({ center: [lng, lat], zoom: 13 });
			},
		};
	},
});
</script>

<style scoped>
li {
	cursor: pointer;
}
p {
	font-size: 12px;
}
h5 {
	font-size: 15px;
}
</style>

