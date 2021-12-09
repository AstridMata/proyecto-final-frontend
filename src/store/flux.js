import axios from "axios";
// import Swal from 'sweetalert2';

const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			kids :[],
			details : null,
			fantasy: [],
			thriller: [],
			romance: [],
			books: [],
			auth: false,
			kidsBooks: [], 
			favoritos:[]
		},

		actions: {
//peticion de libros
			loadBooks: () => {
				fetch(
					`https://www.googleapis.com/books/v1/volumes?q=kids&orderBy=newest&key=AIzaSyAg-smCGbo7V5vB3tjlw_qOqbtIXwpykqg`
				)
					.then((response) => response.json())
					.then((data) => setStore({ books: data.items }));
			},
//peticion libros infantiles con mas detalles
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
				fetch(`https://www.googleapis.com/books/v1/volumes?q=kids&orderBy=newest&key=AIzaSyAg-smCGbo7V5vB3tjlw_qOqbtIXwpykqg`)
					.then(response => response.json())
					.then(data => setStore({ kidsBooks: data.items }));

			},
//boton para desloguearse.
			logout: () => {
				localStorage.removeItem('token');
				setStore({ auth: false })
			},
//accion para formulario login
			login: (email, password) => {

				axios.post('http://localhost:8080/setting/login', {
					email: email,
					password: password
				})
					.then(function (response) {
						if (response.status === 200) {
							setStore({ auth: true })
							localStorage.setItem('token', response.data.token)
						}
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});

			},
			// addFavoritos: favorito =>{
				
			// 	console.log(getStore().favoritos.includes(favorito));
			// 	if(getStore().favoritos.includes(favorito)){
                
			// 	Swal.fire({
			// 		title: 'The book is already added',
			// 		showClass: {
			// 		  popup: 'animate__animated animate__fadeInDown'
			// 		},
			// 		hideClass: {
			// 		  popup: 'animate__animated animate__fadeOutUp'
			// 		}
			// 	  })
			// 	}
			// 	else{
			// 		setStore({
			// 			favoritos:getStore().favoritos.concat(favorito)
	
	
			// 		});
                 
			// 	}
				
			// }


		}

	}
}
	


export default getState;