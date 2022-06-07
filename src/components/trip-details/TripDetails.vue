<template>
	<div class="trip-container column" v-if="distance && duration">
		<div class="col">
			Distancia: <strong>{{ distance }} kms</strong>
		</div>
		<div class="col">
			Duracion: <strong>{{ duration }} minutos</strong>
		</div>
	</div>
</template>

<script>
import { useMapStore } from '@/composables';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TripDetails',
	setup() {
		const { distance, duration } = useMapStore();
		return {
			distance,
			duration,
		};
	},
});
</script>

<style scoped>
.trip-container {
	left: 20px;
	width: 350px;
	bottom: 100px;
	padding: 10px;
	position: fixed;
	font-size: 22px;
	border-radius: 10px;
	background-color: white;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
strong {
	color: #42b983;
}
</style>

