const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			books: []
		},

		actions: {
		    
			loadBooks: () => {
            fetch(
				`https://www.googleapis.com/books/v1/volumes?q=kids&orderBy=newest&key=AIzaSyAg-smCGbo7V5vB3tjlw_qOqbtIXwpykqg`
			)
			.then((response) => response.json())
          .then((data) => setStore({ books: data.items }));

			}

			}
		}
	};


export default getState;