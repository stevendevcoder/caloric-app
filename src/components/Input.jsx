import React, { useState } from 'react';
import '../styles/Input.scss';
import PropTypes from 'prop-types';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

export default function Input({ handleChange, error, type, label }) {
	const [showPassword, setShowPassword] = useState(false);
	const color = error.length ? 'error' : '';

	return (
		<label>
			{label}
			<div className='input'>
				<input 
					onChange={handleChange} 
					className={color}
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
			</div>
			{error.length > 0 && <div>{error}</div>}
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
	label: PropTypes.string
};