import React, { useState } from 'react';
import '../styles/Input.scss';
import PropTypes from 'prop-types';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

export default function Input({ name, handleChange, error, type, label }) {
	const [showPassword, setShowPassword] = useState(false);
	const color = error.length ? 'error' : '';

	return (
		<label>
			{label}
			<div className={`input ${color}`}>
				<input 
					name={name}
					onChange={handleChange} 
					type={showPassword ? 'text' : type} />

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
			{error.length > 0 && <div className='msgError'>{error}</div>}
			</div>
		</label>
   
		
	);
}
Input.defaultProps = {
	type: 'text', 
	error: '', 
};

Input.propTypes = {
	error: PropTypes.string, 
	type: PropTypes.string, 
	label: PropTypes.string,
	handleChange: PropTypes.func
};