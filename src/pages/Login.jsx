import React from 'react';
import 'styles/pages/Login.scss';
import Input from 'components/Input';
import Or from 'components/Or';
import { FacebookLoginButton,GoogleLoginButton } from 
	'react-social-login-buttons';
export default function Login(/*{messageAccount,mensajDeDireccionamiento}*/) {
	return(
		<div className="container">
    
			<div className='image-login'>
				<img src="https://picsum.photos/700/400?random" alt="" />
			</div>
			<div className="login">
				<div className='container-login'>

					<h1 className='message'>Account register</h1>
					<p>If you are already a member you can login with your email address and password.</p>
					<Input type='text'  label='Usuario' />
					<Input  label='correo' type="email"/>
					<Input type='password' label='constraseña'/>
					<Input type='password' label='contraseña'/>
					<div className="checkbox">	<input id="checkbox" type='checkbox' value='Remember me'/>
						<label htmlFor="checkbox">Remember me </label></div>
					<p>Dont have an account ? </p>
					<Or></Or>
					<div className="login-or-register">
						<FacebookLoginButton onClick={() => alert('Hello')} />
						<GoogleLoginButton onClick={() => alert('Hello')} />					</div>

				</div>
			
			</div>
		</div>
	);
}
/*Login.defaultProps={
	messageAccount:'Hola',
};
Login.protoTypes={
	messageAccount:PropTypes.string,
};
*/