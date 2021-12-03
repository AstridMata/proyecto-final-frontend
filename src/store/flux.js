const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			books: [],

			kidsBooks :[]
		},

		actions: {
		    
			loadBooks: () => {
            fetch(
				`https://www.googleapis.com/books/v1/volumes?q=kids&orderBy=newest&key=AIzaSyAg-smCGbo7V5vB3tjlw_qOqbtIXwpykqg`
			)
			.then((response) => response.json())
          .then((data) => setStore({ books: data.items }));
  },

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
				fetch(`https://www.googleapis.com/books/v1/volumes?q=kids&orderBy=newest&key=AIzaSyAg-smCGbo7V5vB3tjlw_qOqbtIXwpykqg`)
				.then(response => response.json())
				.then(data => setStore({kidsBooks:data.items}));
				
			},
			changeColor: (color) => {
                //actualiza un dato de la global store
                setStore({ demo: color });
                
				//Para obtener datos de la store y usarlos como en el ejemplo de la linea 23 a la 26
				// const store = getStore();


			}

			}
		}
	};


export default getState;