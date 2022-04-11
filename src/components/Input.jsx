import React from 'react';
import '../styles/Input.scss';

// eslint-disable-next-line react/prop-types
export default function Input({error,messageError,tipo}) {
	let button='';
	const addColorError=(error)=>{
		if(error){
			return 'error';
		}
		
	};
	if(tipo==='password'){
		button='password';
	}
	else{
		button='';
	}

	return (
		<>
			<div className='input'>


				<input  className={addColorError(error)} type={tipo} /><button className={button}>X</button>
			</div>
			<div className='hidden'>{messageError}</div>
		</>
   
		
	);
}
