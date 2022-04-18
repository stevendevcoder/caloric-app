import React, { useState } from 'react';
import '../styles/Input.scss';
import PropTypes from 'prop-types';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

export default function Input({messageError,type, label}) {
	const [showPassword, setShowPassword] = useState(false);
	const color = messageError.length ? 'error' : '';

	return (
		<label>
			{label}
			<div className='input'>
				<input  className={color} type={showPassword ? 'text' : type} />
				{ type === 'password' && 
								(showPassword ? 
									<AiFillEye 
										onClick={() => setShowPassword(false)} 
										className='icon-password' /> 
								
									:
		
									<AiFillEyeInvisible 
										onClick={() => setShowPassword(true)} 
										className='icon-password'/>
								)
				}
			</div>
			{messageError.length > 0 && <div>{messageError}</div>}
		</label>
   
		
	);
}
Input.defaultProps = {
	type: 'text', 
	messageError: '', 
};

Input.propTypes = {
	messageError: PropTypes.string, 
	type: PropTypes.string, 
	label: PropTypes.string
};