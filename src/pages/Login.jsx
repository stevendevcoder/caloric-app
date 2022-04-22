import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import 'styles/pages/Login.scss';

import Register from '../components/Register';
import SignIn from '../components/SignIn';

//Firebase
import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function Login() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	})
	const [mode, setMode] = useState(true);

	const { login } = useAuth();
	const { register } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState('');



	const loginUser = async (user) => {
		try {
			setError('');
			await login(user.email, user.password);
			navigate('/dashboard');
		} catch (error){
			setError(error.code)
			console.log(error.code)
		}
	}

	const createNewUser = async (newUser) => {
		try {
			setError('');
			await register(newUser.email, newUser.password);
			navigate('/dashdoard');

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

	return (
		<div className="container">

				<div className='image-login'></div>
				
				{ mode ? 
						<SignIn 
							error={error}
							loginUser={loginUser}
							setMode={setMode}/> 
						: 
						<Register 
							error={error}
							createNewUser={createNewUser}
							setMode={setMode}/>
				}
		</div>
	);
}

