import SingIn from 'components/SingIn';
import React, { useState } from 'react';
import 'styles/pages/Login.scss';
import Register from '../../components/Register';
export default function Login(/*{messageAccount,mensajDeDireccionamiento}*/) {
	const [login,setLogin]=useState(true);
	return(
		<div className="container">
    
			<div className='image-login'>
			</div>
			{login?<SingIn setLogin={setLogin}></SingIn>:<Register setLogin={setLogin}></Register>}
			
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
