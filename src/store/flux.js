const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			kids :[],
			details : null,
			fantasy: [],
			thriller: [],
			romance: []
		},
		actions: {
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			exampleFunction: () => {
				getActions().changeColor("green");
			},
            //funcion de ejemplo para hacer peticiones fetch
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},
			loadKidsBooks: () => {
				fetch(`https://www.googleapis.com/books/v1/volumes?q=kids&orderBy=newest&key=${process.env.REACT_APP_API_KEY_GOOGLE}`)
				.then(response => response.json())
				.then(data => setStore({kids:data.items}));
				
			},
			loadFantasyBooks: () => {
				fetch(`https://www.googleapis.com/books/v1/volumes?q=fantasy&orderBy=newest&key=${process.env.REACT_APP_API_KEY_GOOGLE}`)
				.then(response => response.json())
				.then(data => setStore({fantasy:data.items}));
			},
			loadThillerBooks: () => {
				fetch(`https://www.googleapis.com/books/v1/volumes?q=thriller&orderBy=newest&key=${process.env.REACT_APP_API_KEY_GOOGLE}`)
				.then(response => response.json())
				.then(data => setStore({thriller:data.items}));
			},
			loadRomanceBooks: () => {
				fetch(`https://www.googleapis.com/books/v1/volumes?q=romance&orderBy=newest&key=${process.env.REACT_APP_API_KEY_GOOGLE}`)
				.then(response => response.json())
				.then(data => setStore({romance:data.items}));
				
			},
			loadDetails: (id) => {
				fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY_GOOGLE}`)
				.then(response => response.json())
				.then(data => setStore({details:data}));
			},
			changeColor: (color) => {	
                //actualiza un dato de la global store
                setStore({ demo: color });
                
				//Para obtener datos de la store y usarlos como en el ejemplo de la linea 23 a la 26
				// const store = getStore();

				//suponiendo que demo es un array con datos  
				//con colores predefinidos
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm = color;
				// 	return elm;
				// });

			}
		}
	};
};

export default getState;