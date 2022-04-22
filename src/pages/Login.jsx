import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import 'styles/pages/Login.scss';

import Register from '../components/Register';
import Sign from '../components/Sign';

//Firebase
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

/*
		-CREAR FUNCIONES PARA CADA MODO E IMPLEMENTARLAS
		EN EL HANDLESUBMIT()

		-RESTRINGIR EL ACCESSO A RUTAS SIN ESTAR LOGUEADO
*/

export default function Login() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	})
	const [mode, setMode] = useState("signup");

	const { login } = useAuth();
	const { register } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleChange = ({target : {name, value}}) => {
		setUser({...user, [name]: value})
	} 

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(mode === "signup"){
			loginUser();
		} else if(mode === "register"){
			createNewUser();
		}

	}

	const loginUser = async () => {
		try {
			setError('');
			await login(user.email, user.password);
			navigate('/dashboard');
		} catch (error){
			console.log(error.code)
		}
	}

	const createNewUser = async e => {
		try {
			setError('');
			await register(user.email, user.password);
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
					<a href="#" className="login-text focus" name="signup" onClick={changeLogin}>
            Iniciar sesion
					</a>
					<a href="# " className="register" name="register" onClick={changeLogin}>
            Registrarse
					</a>
				</div>
				
				{ mode === 'signup' ? 
						<Sign 
							handleChange={handleChange}
							handleSubmit={handleSubmit}/> 
						: 
						<Register 
							handleChange={handleChange}
							handleSubmit={handleSubmit}/>
				}
				{ error && <p style={{color: "white"}}>{error}</p>}
			</div>
		</div>
	);
}

