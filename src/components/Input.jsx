import React from 'react';
import '../styles/Input.scss';

export default function Input({error,messageError,tipo}) {
	let button='';
	const addColorError=(error)=>{
		if(error){
			return 'error';
		}
		
	};


	return (
		<>
			<div className='input'>
				<input  className={addColorError(error)} type={tipo} /><button className={button}>X</button>
			</div>
			<div className='hidden
'>{messageError}</div>
		</>
   
		
	);
}
