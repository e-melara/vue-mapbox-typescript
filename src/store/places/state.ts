import { Feature } from '@/interfaces/places';

export interface PlacesState {
	isLoading: boolean;
	placesList: Feature[];
	isLoadingPlaces: boolean;
	useLocation?: [number, number];
}

function state(): PlacesState {
	return {
		placesList: [],
		isLoading: true,
		useLocation: undefined,
		isLoadingPlaces: false,
	};
}

export default state;

