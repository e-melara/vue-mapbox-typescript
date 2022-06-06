<template>
	<button class="btn btn-primary" v-if="isReady" @click="goToUserLocation">
		Ir a mi ubicacion
	</button>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

import { useMapStore, usePlacesStore } from '@/composables';

export default defineComponent({
	setup() {
		const useMap = useMapStore();
		const usePlaces = usePlacesStore();

		return {
			// getters
			isReady: computed(() => useMap.isReady && usePlaces.isUserLocationReady),

			// actions
			goToUserLocation: () => {
				useMap.map.value?.flyTo({
					center: usePlaces.location.value,
					zoom: 16,
				});
			},
		};
	},
});
</script>

<style scoped>
button {
	position: fixed;
	top: 30px;
	right: 30px;
}
</style>

