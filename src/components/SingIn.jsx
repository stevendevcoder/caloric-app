import React from 'react';
import Input from 'components/Input';
import Or from 'components/Or';
import { FacebookLoginButton,GoogleLoginButton } from 
	'react-social-login-buttons';
import PropTypes from 'prop-types';


export default function SingIn({setLogin}) {
	return (
		<div className="login">
			<div className='container-login'>

				<h1 className='message'>Login</h1>
				<p>If you are already a member you can login with your email address and password.</p>
				<Input type='text'  label='Usuario' />
				<Input type='password' label='contraseña'/>
				<div className="checkbox">	<input id="checkbox" type='checkbox' value='Remember me'/>
					<label htmlFor="checkbox">Remember me </label></div>
				<p onClick={()=>setLogin(false)}>Dont have an account ? </p>
				<Or></Or>
				<div className="login-or-register">
					<FacebookLoginButton type="submit" onSubmit={() => alert('Hello')} />
					<GoogleLoginButton onClick={() => alert('Hello')} />					</div>

			</div>
		</div>
	);
}
SingIn.propTypes = {
	setLogin:PropTypes.setLogin
};