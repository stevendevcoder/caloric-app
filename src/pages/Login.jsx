import React from 'react';
import 'styles/pages/Login.scss';
import Input from 'components/Input';
export default function Login() {

	return (
		<div className="container">
			<div className="login">
				<div className="opciones-registro">
				
				</div>
			
				<Input type='text' messageError="Error"/>
				<Input type='text' messageError="Error"/>
				<Input type='text' messageError="Error"/>
				<Input type='text' />
				<label htmlFor="">Correo</label>
				<input type="text" />
				<label htmlFor="">Contraseña</label>
				<input type="text" />
				<label htmlFor="">Repetir contraseña</label>
				<input type="text" />
				<div className="text-register">
					<button>Registrarse</button>
					<p className="register">O Registrate con</p>
				</div>
				<div className="register-external">
					<button>Google</button>
					<button>Facebook</button>
				</div>
			</div>
		</div>
	);
}
