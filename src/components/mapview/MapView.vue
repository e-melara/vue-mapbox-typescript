<template>
	<div class="loading" v-if="!isUserLocationReady">
		<div class="text-center">
			<h3>Espere por favor</h3>
			<span>Localizacion ....</span>
		</div>
	</div>
	<div
		class="map-container"
		v-show="isUserLocationReady"
		ref="mapElement"
	></div>
</template>

<script lang="ts">
import Mapboxgl from 'mapbox-gl';
import { defineComponent, ref, watch } from 'vue';

import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
	name: 'MapView',
	setup() {
		const mapElement = ref<HTMLDivElement>();
		const { location, isUserLocationReady } = usePlacesStore();
		const { setMap } = useMapStore();

		const initMap = async () => {
			if (!mapElement.value) throw new Error('mapElement is not defined');
			if (!location.value) throw new Error('user location is not defined');
			await Promise.resolve();

			const map = new Mapboxgl.Map({
				container: mapElement.value,
				style: 'mapbox://styles/mapbox/light-v10',
				center: location.value,
				zoom: 13,
			});

			const myLocationPopus = new Mapboxgl.Popup({ offset: [0, 0] })
				.setLngLat(location.value)
				.setHTML(`<h4>Tu ubicacion</h4><p>Estoy aqui</p>`)
				.addTo(map);

			new Mapboxgl.Marker()
				.setLngLat(location.value)
				.setPopup(myLocationPopus)
				.addTo(map);

			setMap(map);
		};

		watch(isUserLocationReady, value => {
			if (value) {
				initMap();
			}
		});

		return {
			mapElement,
			isUserLocationReady,
		};
	},
});
</script>

<style scoped>
.map-container {
	position: fixed;
	width: 100vw;
	height: 100vh;
}
.loading {
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	color: white;
	position: fixed;
	z-index: 99999;
	background-color: rgba(0, 0, 0, 0.8);

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

