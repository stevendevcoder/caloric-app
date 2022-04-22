import React, {useStete} from 'react';
import Input from 'components/Input';
import Or from 'components/Or';
import { FacebookLoginButton,GoogleLoginButton } from 
	'react-social-login-buttons';
import PropTypes from 'prop-types';

export default function Register({error, createNewUser, setMode}) {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		createNewUser(user)
	}

	const handleChange = ({target : {name, value}}) => {
		setUser({...user, [name]: value})
	} 

	return (
		<div className="login">
			<div className='container-login'>

				<h1 className='message'>Registrarse</h1>

				<Input 
					handleChange={handleChange}
					type='text' 
					label='Usuario' 
				/>
				<Input 
					handleChange={handleChange}
					label='correo' 
					type="email"
				/>
				<Input 
					handleChange={handleChange}
					type='password' 
					label='constraseña'
				/>
				<Input 
					handleChange={handleChange}
					type='password' 
					label='Repetir Contraseña'
				/>

				<div className="checkbox">	<input id="checkbox" type='checkbox' value='Remember me'/>
					<label htmlFor="checkbox">Remember me </label>
				</div>

				<button onClick={handleSubmit}>Crear cuenta</button>

				<p onClick={()=>setMode(true)}>
					Iniciar sesión
					</p>

				<Or></Or>

				<div className="login-or-register">
					<FacebookLoginButton type="submit" />
					<GoogleLoginButton/>					
				</div>

			</div>
		</div>  );
}
Register.propTypes = {
	setLogin:PropTypes.setLogin
};
