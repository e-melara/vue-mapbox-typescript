<template>
	<MapView />
	<SearchBar />
	<MyLocationBtn />
	<TripDetails />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { usePlacesStore } from '@/composables';

import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/searchbar/searchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';

export default defineComponent({
	name: 'HomeView',
	components: {
		MapView,
		SearchBar,
		TripDetails,
		MyLocationBtn,
	},
	setup() {
		usePlacesStore();
	},
});
</script>

