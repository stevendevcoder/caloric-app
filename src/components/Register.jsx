import React from 'react'

function Register({handleChange, handleSubmit}) {
  return (
    <form className="campos" onSubmit={handleSubmit}>
			<label htmlFor="">Usuario</label>
			<input type="text" onChange={handleChange} />
			<label htmlFor="">Correo</label>
			<input type="email" name="email" onChange={handleChange} />
			<label htmlFor="">Contraseña</label>
			<input type="password" name="password" onChange={handleChange} />
			<label htmlFor="">Repetir contraseña</label>
			<input type="text"/>
      <input type="submit" onClick={handleSubmit} value="Registrarse" />
		</form>
  )
}

export default Register