import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import 'styles/pages/Login.scss';

//Firebase
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function Login() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	})
	const [mode, setMode] = useState("login");

	const { login } = useAuth();
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleChange = ({target : {name, value}}) => {
		setUser({...user, [name]: value})
	} 

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError('');
			await signup(user.email, user.password);
			navigate('/menu');

		} catch (error){
			let msgError = "";
			if(error.code === "auth/internal-error"){
				msgError = "Email invalido";
			} else if(error.code === "auth/weak-password"){
				msgError = "Contraseña insegura";
			} else if(error.code === "auth/email-alredy-in-use"){
				msgError = "El email ya está en uso"
			}
			setError(msgError)
		}
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
		
		console.log(e.target.name);
		setMode(e.target.name);
	}

	return (
		<div className="container">
			<div className="login">
				<div className="opciones-registro">
					<a href="#" className="login-text" name="login" onClick={changeLogin}>
            Iniciar sesion
					</a>
					<a href="# " className="focus register" name="register" onClick={changeLogin}>
            Registrarse
					</a>
				</div>
				<form className="campos" onSubmit={handleSubmit}>
					<label htmlFor="">Usuario</label>
					<input type="text" onChange={handleChange} />
					<label htmlFor="">Correo</label>
					<input type="email" name="email" onChange={handleChange} />
					<label htmlFor="">Contraseña</label>
					<input type="password" name="password" onChange={handleChange} />
					<label htmlFor="">Repetir contraseña</label>
					<input type="text"/>
				</form>
				<div className="text-register">
					<input type="submit" onClick={handleSubmit} value="Registrarse" />
					<p className="register">O Registrate con</p>
				</div>
				<div className="register-external">
					<button>Google</button>
					<button>Facebook</button>
				</div>
			</div>

			{ error && <p>{error}</p>}
		</div>
	);
}

