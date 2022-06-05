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
import { defineComponent, ref } from 'vue';

import { usePlacesStore } from '@/composables';

export default defineComponent({
	name: 'MapView',
	setup() {
		const mapElement = ref<HTMLDivElement>();
		const { location, isUserLocationReady } = usePlacesStore();

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
	background-color: red;
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

