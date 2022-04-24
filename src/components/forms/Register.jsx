import React, {useState} from 'react';
import Input from 'components/Input';
import Or from 'components/Or';
import { FacebookLoginButton,GoogleLoginButton } from 
	'react-social-login-buttons';
	import { AiOutlineArrowLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Register({ createNewUser, setMode}) {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		createNewUser(user);
	};

	const handleChange = ({target : {name, value}}) => {
		setUser({...user, [name]: value});
	}; 

	return (
		<div className="login">
			<div className='changeMode' onClick={()=>setMode(true)}>
				<AiOutlineArrowLeft id='icon-left'/>
				<p>Iniciar sesión</p>
			</div>
			<div className='container-login'>

				<h1 className='message'>Registrarse</h1>

				<Input 
					name='name'
					handleChange={handleChange}
					type='text' 
					label='Usuario' 
				/>
				<Input 
					name='email'
					handleChange={handleChange}
					label='correo' 
					type="email"
				/>
				<Input 
					name='password'
					handleChange={handleChange}
					type='password' 
					label='constraseña'
				/>

				<div className="checkbox">	<input id="checkbox" type='checkbox' value='Recordarme'/>
					<label htmlFor="checkbox">Recordarme</label>
				</div>

				<button onClick={handleSubmit}>Crear cuenta</button>

				<Or></Or>

				<div className="login-or-register">
					<FacebookLoginButton type="submit" />
					<GoogleLoginButton/>					
				</div>

			</div>
		</div>  );
}

Register.propTypes = {
	error: PropTypes.string, 
	createNewUser: PropTypes.func,
	setMode: PropTypes.func
};
