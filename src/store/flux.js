import axios from "axios";
import Swal from 'sweetalert2'

const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
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
			addFavoritos: favorito =>{
				
				console.log(getStore().favoritos.includes(favorito));
				if(getStore().favoritos.includes(favorito)){
                
				Swal.fire({
					title: 'The book is already added',
					showClass: {
					  popup: 'animate__animated animate__fadeInDown'
					},
					hideClass: {
					  popup: 'animate__animated animate__fadeOutUp'
					}
				  })
				}
				else{
					setStore({
						favoritos:getStore().favoritos.concat(favorito)
	
	
					});
                 
				}
				
			}


		}

	}
}
	


export default getState;