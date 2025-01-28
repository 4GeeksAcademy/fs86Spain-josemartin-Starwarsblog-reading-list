const characterDispatcher = {
	get: async() => {
		const response = await fetch('https://www.swapi.tech/api/people',{
			method: 'GET'
		});
		const { results } = await response.json()
		return results;
	},
	getById: async(id) => {
		const response = await fetch(`https://www.swapi.tech/api/people/${id}`,{
			method: 'GET'
		});
		const { result } = await response.json()
		return {...result.properties, description:result.description}
	},
};

const planetDispatcher = {
	get: async() => {
		const response = await fetch('https://www.swapi.tech/api/planets',{
			method: 'GET'
		});
		const { results } = await response.json()
		return results;
	},
	getById: async(id) => {
		const response = await fetch(`https://www.swapi.tech/api/planets/${id}`,{
			method: 'GET'
		});
		const { result } = await response.json()
		return {...result.properties, description:result.description};
	},
};

const vehicleDispatcher = {
	get: async() => {
		const response = await fetch('https://www.swapi.tech/api/vehicles',{
			method: 'GET'
		});
		const { results } = await response.json()
		return results;
	},
	getById: async(id) => {
		const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`,{
			method: 'GET'
		});
		const { result } = await response.json()
		return {...result.properties, description:result.description};
	},
};


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [],
			planetList: [],
			vehicleList: [],
			characterOverview: { name: ''},
			planetOverview: {name: '' },
			vehicleOverview: {name: '' },
			favoriteList: [],
		},
		actions: {
			getCharacterList: async() => {
				const characterList = await characterDispatcher.get();
				const store = getStore();
				setStore({...store, characterList})
			},
			getPlanetList: async() => {
				const planetList = await planetDispatcher.get();
				const store = getStore();
				setStore({...store, planetList})
			},
			getVehicleList: async() => {
				const vehicleList = await vehicleDispatcher.get();
				const store = getStore();
				setStore({...store, vehicleList})
			},
			getCharacterOverview: async(id) => {
				const characterOverview = await characterDispatcher.getById(id);
				const store = getStore();
				setStore({...store, characterOverview})
			},
			getPlanetOverview: async(id) => {
				const planetOverview = await planetDispatcher.getById(id);
				const store = getStore();
				setStore({...store, planetOverview})
			},
			getVehicleOverview: async(id) => {
				const vehicleOverview = await vehicleDispatcher.getById(id);
				const store = getStore();
				setStore({...store, vehicleOverview})
			},
			addFavorite: (name) => {
				const store = getStore();
				setStore({...store, favoriteList:[...store.favoriteList, name]})
			}
		}
	};
};

export default getState;
