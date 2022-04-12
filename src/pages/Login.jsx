import { query } from 'firebase/database';
import { collection, doc, setDoc } from 'firebase/firestore';
import React, {useState} from 'react';
import 'styles/pages/Login.scss';
import { db } from '../firebaseConfig';

export default function Login() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [user, setUser] = useState({})

	async function submit(e)  {
		e.preventDefault();

		const usersRef = collection(db, "users");

		await setDoc(doc(db, "users", name), {name,email, password});
		
		/*
		const q = query(collection(db, 'users'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			console.log("data", querySnapshot.docs.map(d => doc.data([email, password, name])))
		})*/

		console.log("nuevo user agregado");
	}  

	function changeLogin(e) {
		e.preventDefault();
		if (!e.target.classList.contains('focus')) {
			e.target.classList.add('focus');
			if (e.target.nextElementSibling) {
				e.target.nextElementSibling.classList.remove('focus');
			} else {
				e.target.previousElementSibling.classList.remove('focus');
			}
		}

		console.log(e.target.nextElementSibling);
	}
	return (
		<div className="container">
			<div className="login">
				<div className="opciones-registro">
					<a href="#" className="login-text" onClick={changeLogin}>
            Iniciar sesion
					</a>
					<a href="# " className="focus register" onClick={changeLogin}>
            Registrarse
					</a>
				</div>
				<form className="campos" action="POST">
					<label htmlFor="">Usuario</label>
					<input type="text" onChange={(e) => setName(e.target.value)} />
					<label htmlFor="">Correo</label>
					<input type="text" onChange={(e) => setEmail(e.target.value)} />
					<label htmlFor="">Contraseña</label>
					<input type="text" onChange={(e) => setPassword(e.target.value)} />
					<label htmlFor="">Repetir contraseña</label>
					<input type="text"/>
				</form>
				<div className="text-register">
					<button onClick={submit}>Registrarse</button>
					<p className="register">O Registrate con</p>
				</div>
				<div className="register-external">
					<button>Google</button>
					<button>Facebook</button>
				</div>
			</div>

			<UsersList />
		</div>
	);
}

const UsersList = (props) => {
	return (
		<div className="containerUsers">
			<div className='User'>
				{}
			</div>
		</div>
	)
}