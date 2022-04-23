import React, {useState} from 'react';
import Input from 'components/Input';
import Or from 'components/Or';
import { FacebookLoginButton,GoogleLoginButton } from 
	'react-social-login-buttons';
import PropTypes from 'prop-types';

export default function SignIn({ error, loginUser, setMode }) {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		loginUser(user);
	}

	const handleChange = ({target : {name, value}}) => {
		setUser({...user, [name]: value})
	}
	return (
		<div className="login">
			<div className='container-login'>

				<h1 className='message'>Inciar sesion</h1>
				
				<Input 
					type='email' 
					error={error}
					handleChange={handleChange}  
					label='Usuario' 
				/>
				<Input 
					type='password' 
					error={error}
					handleChange={handleChange} 
					label='contraseña'
				/>

				<div className="checkbox">	<input id="checkbox" type='checkbox' value='Remember me'/>
					<label htmlFor="checkbox">Remember me </label></div>
				<button onClick={handleSubmit} className=''>Continuar</button>
					
				<p onClick={()=>setMode(false)}>Registrarse</p>
				<Or></Or>
				<div className="login-or-register">
					<FacebookLoginButton type="submit"/>
					<GoogleLoginButton />					
				</div>

			</div>
		</div>
	);
}

SignIn.propTypes = {
	error: PropTypes.string, 
	loginUser: PropTypes.func,
	setMode: PropTypes.func
};